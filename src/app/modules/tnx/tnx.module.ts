import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TnxTypeComponent } from './components/tnx-type/tnx-type.component';
import { TnxFreeComponent } from './components/tnx-free/tnx-free.component';
import { CreateTnxFreeComponent } from './modals/create-tnx-free/create-tnx-free.component';
import { CreateTnxTypeComponent } from './modals/create-tnx-type/create-tnx-type.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: "type"},
  { path: 'type', pathMatch: 'full', component:  TnxTypeComponent},
  { path: 'free', pathMatch: 'full', component:  TnxFreeComponent}
];

@NgModule({
  declarations: [
    TnxTypeComponent,
    TnxFreeComponent,
    CreateTnxFreeComponent,
    CreateTnxTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [CreateTnxFreeComponent, CreateTnxTypeComponent]
})
export class TnxModule { }
