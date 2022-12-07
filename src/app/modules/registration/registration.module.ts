import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationListComponent } from './components/registration-list/registration-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { RegistrationModalComponent } from './modals/registration-modal/registration-modal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "list" },
  { path: 'list', pathMatch: 'full', component: RegistrationListComponent }
];

@NgModule({
  declarations: [
    RegistrationListComponent,
    RegistrationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [RegistrationModalComponent]
})
export class RegistrationModule { }
