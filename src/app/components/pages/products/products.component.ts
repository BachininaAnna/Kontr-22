import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../../services/product-service.service";
import {ProductType} from "../../../types/product.type";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {
  }
  products: ProductType[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

}
