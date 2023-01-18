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
  alertString: boolean = false;
  productForm!: FormGroup;
  product!: Product;
  constructor(private fb: FormBuilder, private router: Router, private Aroute: ActivatedRoute, private productService: ProductsService) {
    this.Aroute.paramMap.subscribe((paramMap) => this.id = paramMap.get('id'));
     this.editing = this.Aroute.snapshot.params["edit"] == "edit";
     this.id = this.Aroute.snapshot.params["id"] == "id";
     console.log(this.id);
    

  }


  ngOnInit(): void {

    

    this.productForm = this.fb.group({
      id: this.fb.control(this.generateID()),
      name: this.fb.control("", [Validators.required]),
      active: this.fb.control(""),
      description: this.fb.control("", [Validators.required]),
      expirationDate: this.fb.control("", [Validators.required]),
      features: this.fb.control("", [Validators.required])



    })
    




  }

  navigateToProducts(): any {
    return this.router.navigateByUrl('products');
  }

  //handle form
  AddNewProduct(): void {
    if (this.productForm.status == "VALID") {
      this.productService.AddNewProduct(this.productForm.value);
      this.productForm.get('name')?.setValue("");
      this.productForm.get('active')?.setValue("");
      this.productForm.get('description')?.setValue("");
      this.productForm.get('expirationDate')?.setValue("");
      this.productForm.get('features')?.setValue("");
      this.alertString = true;
    } else {
      this.editing = true;
      this.alertString = false;
      this.editProduct()
      


    }

  }

  editProduct():void{
    this.editing = true;
    this.productForm.value.id;
      this.productService.EditAndUpdateProduct(this.productForm.value);
      this.alertString = false;
    
    
  }

  selectDevice(device: any) {
    this.deviceType = device.icon;
  }


  generateID(): Number {
    return Math.floor(Math.random() * 1000);
  }


  


}
