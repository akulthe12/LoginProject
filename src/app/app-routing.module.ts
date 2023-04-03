import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  // {path:'login1',component:Login1Component},
  // { path: 'table', component: TableComponent }
//   {path:'',redirectTo:'products',pathMatch:"full"},
//   {path:'products',component:ProductsComponent},
//   {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
