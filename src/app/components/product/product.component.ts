import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
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
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private active: ActivatedRoute, private productService: ProductsService, form:FormGroup) {
    this.form = form


    ClarityIcons.addIcons(userIcon);
  }


  ngOnInit(): void {

    this.form = this.fb.group({
      name: ["", Validators.required],
      active: ["", Validators.required],
      description: ["", Validators.required],
      features: ["", Validators.required],
      date: ["", Validators.required]
    })

  }


  onSubmit(){
    console.log(this.form.value);
  }

}
