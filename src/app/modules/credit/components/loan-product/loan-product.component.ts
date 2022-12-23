import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SnakBarService } from 'app/shared/service/snak-bar.service';
import { UserService } from 'app/shared/service/user.service';
import { CreateLoanProductComponent } from '../../modals/create-loan-product/create-loan-product.component';
import { LoanProductService } from '../../services/loan-product.service';

@Component({
  selector: 'app-loan-product',
  templateUrl: './loan-product.component.html',
  styleUrls: ['./loan-product.component.scss']
})
export class LoanProductComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'interestRate', 'loanFee', 'maxAmount', 'minAmount', 'minPeriod', 'maxPeriod'];
  public dataSource;
  public isLoading = false;

  constructor(private loanProductService: LoanProductService,
    public dialog: MatDialog,
    private userService: UserService,
    private snakBarService: SnakBarService) { }

  ngOnInit(): void {
    console.log('this.UserService.ge :>> ', this.userService.userId + " " + this.userService.userRole);
    this.fetchLoanProductList();
  }

  openDialog(loanProduct?) {
    this.isLoading = true;
    let dialogRef = this.dialog.open(CreateLoanProductComponent, {
      width: '1090px',
      panelClass: 'app-full-bleed-dialog',
      data: {
        LoanProductData: loanProduct
      },
    });
    dialogRef.afterClosed().subscribe(modalLoanProductData => {
      debugger;
      if(modalLoanProductData){
        if (!loanProduct) {
          this.saveLoanProduct(modalLoanProductData);
        }
        else {
          this.isLoading = false;
        }
      }
      else {
        this.isLoading = false;
      }
    });
  }

  saveLoanProduct(modalLoanProductData){
    modalLoanProductData = {
      ...modalLoanProductData,
      lastModifiedBy: this.userService.userId,
      createdBy: this.userService.userId,
    }
    this.loanProductService.saveLoanProduct(modalLoanProductData).subscribe(async data => {
      this.fetchLoanProductList();
      this.snakBarService.showMessage("Successfully Saved");
    },
      error => {
        this.isLoading = false;
      });
    console.log('modalLoanProductData :>> ', modalLoanProductData);
  }

  fetchLoanProductList() {
    this.isLoading = true;
    this.loanProductService.fetchLoanProductList().subscribe(data => {
      debugger;
      this.dataSource = data;
      this.isLoading = false;
      console.log('data :>> ', data);
    },
      error => {
        this.isLoading = false;
        this.snakBarService.showMessage("An error has occured");
      });
  }

}
