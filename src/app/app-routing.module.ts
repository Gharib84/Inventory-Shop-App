import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  {
    path: "", redirectTo: '/login', pathMatch: "full"
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "products", component: ProductsComponent, pathMatch: "full"
  },
  {
    path: "products/:id", component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
