import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
export class ProductComponent {
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
  addNewProduct: FormGroup | undefined;

  constructor(private fb: FormBuilder, private  router: Router,private active: ActivatedRoute,private productService:ProductsService) {
    
    ClarityIcons.addIcons(userIcon);
  }
  

 

}
