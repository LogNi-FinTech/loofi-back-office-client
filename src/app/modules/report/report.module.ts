import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BalanceSheetComponent } from './components/balanceSheet/balanceSheet.component';
import { IncomeStatementComponent } from './components/incomeStatement/incomeStatement.component';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "create" },
  { path: 'balance-sheet', pathMatch: 'full', component: BalanceSheetComponent },
  { path: 'income-statement', component: IncomeStatementComponent },
];

@NgModule({
  declarations: [
    BalanceSheetComponent,
    IncomeStatementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ReportModule { }
