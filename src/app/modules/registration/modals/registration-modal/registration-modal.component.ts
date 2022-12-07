import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent implements OnInit {

  registrationForm: FormGroup;
  isCreateMode: boolean;
  registrationData: any;
  constructor(
    public dialogRef: MatDialogRef<RegistrationModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.initialIzeForm();
    this.isCreateMode = this.data.registrationData == undefined;
    this.registrationData = this.data.registrationData;
    console.log('data.registrationType :>> ', this.data.registrationData);
    console.log('data.isCreateMode :>> ', this.isCreateMode);
  }

  initialIzeForm() {
    this.registrationForm = this.fb.group({
      firstName: [''],
      lastName : [''],
      idNumber: [''],
      idType: ['NID'],
      customerId: [''],
      mobileNo: [''],
      email: [''],
      area: ['Khulna'],
      region: ['Khulna'],
      territory: ['Khulna'],
      presentAddress: ['Khulna'],
      presentCity: ['Khulna'],
      presentUnion: ['Khulna'],
      presentThana: ['Khulna'],
      presentDistrict: ['Khulna'],
      presentCountry: ['Khulna'],
      permanentAddress: ['Khulna'],
      permanentCity: ['Khulna'],
      permanentUnion: ['Khulna'],
      permanentThana: ['Khulna'],
      permanentDistrict: ['Khulna'],
      permanentCountry: ['Khulna'],
      nomineeName: ['Rifat'],
      nomineeMobile: ['2452345632'],
      nomineeIdNumber: ['35635463'],
      nomineeIdType: ['NID'],
      nomineeAddress: ['Khulna'],
      nomineeRelation: ['Khulna'],
      status: ['PENDING'],
    });
  }

  submit() {
    this.closeModal(this.registrationForm.value);
  }

  changeStatus(status){
    this.closeModal(status);
  }

  returnTitle() {
    if (this.isCreateMode)
      return "New Registration";
    else return "Change Status";
  }

  closeModal(data) {
    this.dialogRef.close(data);
  }

}
