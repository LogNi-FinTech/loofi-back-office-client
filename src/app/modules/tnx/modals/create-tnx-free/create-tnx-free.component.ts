import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TnxTypeService } from '../../services/tnxType.service';

@Component({
  selector: 'app-create-tnx-free',
  templateUrl: './create-tnx-free.component.html',
  styleUrls: ['./create-tnx-free.component.scss']
})
export class CreateTnxFreeComponent implements OnInit {

  tnxFreeForm: FormGroup;
  tnxTypes: any[] = [];
  constructor(
    public dialogRef: MatDialogRef<CreateTnxFreeComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private tnxTypeService: TnxTypeService) { }

  ngOnInit(): void {
    this.initialIzeForm(this.data.tnxData);
    this.getTnxType();
    console.log('data.tnxData :>> ', this.data.tnxData);
  }

  initialIzeForm(tnxFreeData) {
    this.tnxFreeForm = this.fb.group({
      name: [tnxFreeData && tnxFreeData.name ? tnxFreeData.name : '', Validators.required],
      payer: [tnxFreeData && tnxFreeData.payer ? tnxFreeData.payer : '', Validators.required],
      type: [tnxFreeData && tnxFreeData.type ? tnxFreeData.type : '', Validators.required],
      receiver: [tnxFreeData && tnxFreeData.receiver ? tnxFreeData.receiver : '', Validators.required],
      channel: [tnxFreeData && tnxFreeData.channel ? tnxFreeData.channel : ''],
      originalTxnType: [tnxFreeData && tnxFreeData.originalTxnType.id ? tnxFreeData.originalTxnType.id : '', Validators.required],
      generatedTxnType: [tnxFreeData && tnxFreeData.generatedTxnType.id ? tnxFreeData.generatedTxnType.id : '', Validators.required],
      chargeType: [tnxFreeData && tnxFreeData.chargeType ? tnxFreeData.chargeType : ''],
      deductAmount: [tnxFreeData && tnxFreeData.deductAmount ? tnxFreeData.deductAmount : ''],
      enabled: [tnxFreeData && tnxFreeData.enabled ? tnxFreeData.enabled : ''],
      description: [tnxFreeData && tnxFreeData.description ? tnxFreeData.description : ''],
    });
    console.log('this.tnxFreeForm.value :>> ', this.tnxFreeForm.value);
  }

  getTnxType() {
    this.tnxTypeService.getAll().subscribe((r) => {
      this.tnxTypes = r.content;
    });
  }

  submit() {
    this.closeModal(this.tnxFreeForm.value);
  }

  closeModal(data) {
    this.dialogRef.close(data);
  }
}
