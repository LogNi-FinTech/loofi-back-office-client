import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-ledger',
  templateUrl: './create-ledger.component.html',
  styleUrls: ['./create-ledger.component.scss']
})
export class CreateLedgerComponent implements OnInit {

  transactionForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateLedgerComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initialIzeForm(this.data.ledgerData); 
    console.log('data.ledgerData :>> ', this.data.ledgerData);
  }

  initialIzeForm(ledgerData) {
    this.transactionForm = this.fb.group({
      name: [ledgerData && ledgerData.name ? ledgerData.name : '', Validators.required],
      ledgerCode: [ledgerData && ledgerData.ledgerCode ? ledgerData.ledgerCode : '', Validators.required],
      type: [ledgerData && ledgerData.type ? ledgerData.type : '', Validators.required],
      head: [ledgerData && ledgerData.head ? ledgerData.head : '', Validators.required],
      showAccountsInChart: [ledgerData && ledgerData.showAccountsInChart ? ledgerData.showAccountsInChart : ''],
      onlyParent: [ledgerData && ledgerData.onlyParent ? ledgerData.onlyParent : ''],
      description: [ledgerData && ledgerData.description ? ledgerData.description : '', Validators.required]
    });
  }

  submit() {
    this.closeModal(this.transactionForm.value);
  }

  closeModal(data) {
    this.dialogRef.close(data);
  }

}
