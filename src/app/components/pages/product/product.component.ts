import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductType;

  constructor() {
    this.product = {
      image: '',
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {

  }

}
