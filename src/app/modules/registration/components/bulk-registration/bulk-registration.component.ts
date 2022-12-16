import { Component, OnInit } from '@angular/core';
import { SnakBarService } from 'app/shared/service/snak-bar.service';
import { UserService } from 'app/shared/service/user.service';
import { RegistratioService } from '../../services/registratio.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bulk-registration',
  templateUrl: './bulk-registration.component.html',
  styleUrls: ['./bulk-registration.component.scss']
})
export class BulkRegistrationComponent implements OnInit {

  public displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobileNo', 'idNumber', 'idType'];
  public dataSource;
  public isLoading = false;

  constructor(private registratioService: RegistratioService,
    private userService: UserService,
    private snakBarService: SnakBarService) { }

  ngOnInit(): void {
    console.log('this.UserService.ge :>> ', this.userService.userId + " " + this.userService.userRole);
    //this.testData();
  }

  openDialog() { }

  srcResult;
  onFileSelected(event) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      const data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
     // Data will be logged in array format containing objects
      //this.getValueFromJsonObject(data);
      this.dataSource = data;
      console.log('this.dataSource', this.dataSource);
    }
  }

  getValueFromJsonObject(ObjectData){
    ObjectData.forEach(element => {
      this.dataSource.push(Object.keys(element).map(function (key) { return element[key]; }));
    }); 
    console.log('this.dataSource', this.dataSource);
  }

  saveBulkRegistration(){
    this.isLoading = true;
    this.dataSource = this.dataSource.map(data=> {
      data = {
        ...data,
        lastModifiedBy: this.userService.userId,
        createdBy: this.userService.userId,
      }
      return data;
    });
    debugger;
    console.log('this.dataSource :>> ', this.dataSource);
    this.registratioService.saveBulkRegistration(this.dataSource).subscribe(res => {
      this.snakBarService.showMessage("Successfully Saved");
      this.isLoading = false;
    },
      error => {
        this.isLoading = false;
    });
  }

  testData(){
    this.dataSource = [
      {
        email
          :
          "email@gmail.com",
        firstName
          :
          "Dulce",
        idNumber
          :
          '12352',
        idType
          :
          "NID",
        lastName
          :
          "lastName",
        mobileNo
          :
          '1967856756'
      }
    ];
  }
}
