import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanProductComponent } from './components/loan-product/loan-product.component';
import { CreateLoanProductComponent } from './modals/create-loan-product/create-loan-product.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ConfirmDeleteComponent } from './modals/confirm-delete/confirm-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "loan-product-list" },
  { path: 'loan-product-list', pathMatch: 'full', component: LoanProductComponent }
];


@NgModule({
  declarations: [
    LoanProductComponent,
    CreateLoanProductComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [CreateLoanProductComponent, ConfirmDeleteComponent]
})
export class CreditModule { }
