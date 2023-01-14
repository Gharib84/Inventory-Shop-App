import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private productService: ProductsService) {

  }
  ngOnInit(): void {
    //this.products = JSON.parse(localStorage.getItem('products') || "");

  }

  getProductList() {
    return this.productService.Products();
  }

  deleteProduct(id:number):any {
    return this.productService.deleteProduct(id);
  }

  navigatePerProduct(id:number):any{
    return this.productService.navigatePerProduct(id);
  }

}
