import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginGuard } from './services/login.guard';
import { AuthResolver } from './services/auth.resolver';

const routes: Routes = [
  {
    path: "", redirectTo: '/login', pathMatch: "full"
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'products', component: ProductsComponent,pathMatch: "full", resolve:{auth: AuthResolver}
  },
  {
    path: 'product/:id', component:ProductComponent
  },
  {
    path:'product/:create', component:ProductComponent
  },
  {
    path: 'product/:edit/:id', component:EditComponent
  },
  {
    path: "**", redirectTo: "/login", pathMatch:"full"
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
