import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { CustomersComponent } from './customers.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  {path: 'heros',
component: TemplatedrivenformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule,
ReactiveFormsModule],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
