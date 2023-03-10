import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  prameterID:any;

  constructor(private router: Router, private productService: ProductsService, private Aroute:ActivatedRoute) {
    this.Aroute.data.subscribe(data =>{
      if (!data['auth']) {
        this.router.navigateByUrl('/login');
      }
    })

  }
  ngOnInit(): void {
    //this.products = JSON.parse(localStorage.getItem('products') || "");
   this.Aroute.paramMap.subscribe((paramMap) => this.prameterID = paramMap.get('id'));
   console.log(this.prameterID);
  
  }

  getProductList() {
    return this.productService.Products();
  }

  deleteProduct(id:number):any {
    return this.productService.deleteProduct(id);
  }

 product(id:number){
  return this.router.navigateByUrl(`product/edit/${id}`);
 }

 addProduct():any {
  return this.router.navigate(['product/create']);
 }



}
