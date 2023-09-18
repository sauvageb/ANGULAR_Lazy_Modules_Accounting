import {Component, OnInit} from '@angular/core';
import {Product} from "../../../core/models/product";
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap} from "rxjs";
import {ProductService} from "../../services/product.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;
  priceFormControl!: FormControl;
  tvaRates$ = this.productService.fetchAllTVA();


  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.route.params
      .pipe(map(params => params['id']))
      .pipe(mergeMap(productId => this.productService.getById(productId)))
      .subscribe(product => {
          this.product = product;
          console.log(JSON.stringify(this.product))

          this.priceFormControl = new FormControl(product.priceHT, [Validators.required, Validators.min(0)]);

        },
        error => console.log(error)
      );
  }

}
