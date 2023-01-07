import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanProductComponent } from './components/loan-product/loan-product.component';
import { CreateLoanProductComponent } from './modals/create-loan-product/create-loan-product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ConfirmDeleteComponent } from '../../shared/modals/confirm-delete/confirm-delete.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { CreateLoanApplicationComponent } from './modals/create-loan-application/create-loan-application.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "loan-product-list" },
  { path: 'loan-products', pathMatch: 'full', component: LoanProductComponent },
  { path: 'loan-applications', pathMatch: 'full', component: LoanApplicationComponent }
];


@NgModule({
  declarations: [
    LoanProductComponent,
    CreateLoanProductComponent,
    ConfirmDeleteComponent,
    LoanApplicationComponent,
    CreateLoanApplicationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [CreateLoanProductComponent, ConfirmDeleteComponent, CreateLoanApplicationComponent]
})
export class CreditModule { }
