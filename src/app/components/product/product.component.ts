import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrWizard } from "@clr/angular";
import { Product } from 'src/app/models/product';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon } from '@cds/core/icon';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  deviceType: string = "tablet";
  @ViewChild("wizardlg") wizardLarge?: ClrWizard;
  mdOpen: boolean = false;
  lgOpen: boolean = true;
  xlOpen: boolean = false;
  editing: boolean = false;
  new: any;
  listOfDevices: any[] = [{
    name: 'Tablet',
    icon: 'tablet',
  }, {
    name: 'Laptop',
    icon: 'computer'
  }, {
    name: 'Phone',
    icon: 'mobile'
  }, {
    name: 'Monitor',
    icon: 'display'
  }];

  id!: any;
  productForm!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private Aroute: ActivatedRoute, private productService: ProductsService) {
    this.Aroute.paramMap.subscribe((paramMap) => this.id = paramMap.get('id'));


  }


  ngOnInit(): void {

    this.productForm = this.fb.group({
      name: this.fb.control("", [Validators.required]),
      active: this.fb.control("", [Validators.required]),
      description: this.fb.control("", [Validators.required]),
      expirationDate: this.fb.control("", [Validators.required]),
      features: this.fb.control("", [Validators.required])
    


    })

    this.AddNewProduct();


  }

  navigateToProducts(): any {
    return this.router.navigateByUrl('products');
  }

  //handle form
  AddNewProduct(): void {
    if (this.productForm.status == "VALID") {
      this.productService.AddNewProduct(this.productForm.value);
      
    } 

  }
}
