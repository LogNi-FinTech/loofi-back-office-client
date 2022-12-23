import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanProductComponent } from './components/loan-product/loan-product.component';
import { CreateLoanProductComponent } from './modals/create-loan-product/create-loan-product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "loan-product-list" },
  { path: 'loan-product-list', pathMatch: 'full', component: LoanProductComponent }
];


@NgModule({
  declarations: [
    LoanProductComponent,
    CreateLoanProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [CreateLoanProductComponent]
})
export class CreditModule { }
