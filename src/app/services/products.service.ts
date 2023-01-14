import { Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {

  private products: Product[] = [
    {
      id: 196,
      name: "Lenovo",
      active: true,
      description: "This is Lenvo Laptop",
      expirationDate: "1/2/2023",
      feature: ["sa"]
    },
    {
      id: 498,
      name: "Sumsung",
      expirationDate: "1/4/2028",
    },
    {
      id: 34,
      name: "Motorola",
      active: false,
      description: "This is Motorola Phone",
      expirationDate: "1/6/2023",
    },
    {
      id: 254,
      name: "LG",
      active: true,
      description: "LG Laptop",
      expirationDate: "1/8/2024",
      feature: ["LG"]
    },
    {
      id: 632,
      name: "Dell",
      active: true,
      description: "This is Dell Laptop",
      expirationDate: "1/2/2026",
      feature: ["Dell"]
    },
    {
      id: 653,
      name: "Lenvo Z200",
      active: true,
      description: "This is Lenvo Z200",
      expirationDate: "1/10/2023",
      feature: ["Lenvo Z200"]
    },
    {
      id: 543,
      name: "Sumsung",
      active: true,
      description: "This is Sumsung Laptop",
      expirationDate: "1/12/2023",
      feature: ["SM"]
    },
    {
      id: 981,
      name: "Huawei",
      active: true,
      description: "This is Huawei Laptop",
      expirationDate: "1/2/2024",
      feature: ["Huawei"]
    },
    {
      id: 53,
      name: "sesa",
      active: true,
      description: "This is sesa Laptop",
      expirationDate: "1/2/2023",
      feature: ["sesa"]
    },
    {
      id: 762,
      name: "Mac Notebook",
      active: true,
      description: "This is Notebook",
      expirationDate: "1/2/2023",
      feature: ["Mac"]
    },
  ];

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
     //this.products = JSON.parse(localStorage.getItem('products') || "");
  }

  Products():Product[]{
    return this.products;
  }


  deleteProduct(id:number):any {
    let findIndex = this.products.findIndex((product) => product.id === id);
    if (findIndex !== -1) {
      this.products.splice(findIndex,1);
      this.router.navigateByUrl("products");

    }
  }
  
}
