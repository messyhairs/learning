import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'customer-list',
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'order-list',
  loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  // { path: '', redirectTo: 'product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListComponent },
  { path: 'users/:username/:role', component: ProductDetailsComponent },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
