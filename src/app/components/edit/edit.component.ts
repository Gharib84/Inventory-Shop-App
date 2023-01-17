import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{
  product!:Product;
  editing: boolean = false;
  productForm!: FormGroup;
  
  constructor(private router:Router, private ActiveRoute: ActivatedRoute, private fb:FormBuilder, private productService: ProductsService){
   
  }

  ngOnInit(): void {
     this.ActiveRoute.snapshot.params['edit'] == "edit";
     this.ActiveRoute.snapshot.params['id'] == this.product.id;
   
  }


  
}
