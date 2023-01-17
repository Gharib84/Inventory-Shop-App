import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  {
    path: "", redirectTo: '/login', pathMatch: "full"
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'product/:id', component:ProductComponent
  },
  {
    path:'product/:create', component:ProductComponent
  },
  {
    path: 'product/:edit/:id', component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
