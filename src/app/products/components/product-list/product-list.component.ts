import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../../core/models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products?: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService
      .getAll()
      .subscribe(data => {
        this.products = data;
      });
  }

  delete(product: Product) {
    this.productService
      .remove(product)
      .subscribe(data => {
        this.products = data;
      });
  }
}
