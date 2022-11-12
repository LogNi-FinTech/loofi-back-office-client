import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerListComponent } from './components/ledger-list/ledger-list.component';
import { CreateLedgerComponent } from './modals/create-ledger/create-ledger.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "list"},
  { path: 'list', pathMatch: 'full', component: LedgerListComponent }
];

@NgModule({
  declarations: [
    LedgerListComponent,
    CreateLedgerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [CreateLedgerComponent]
})
export class LedgerModule { }
