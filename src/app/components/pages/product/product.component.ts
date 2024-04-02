import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product-service.service";
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: ProductType;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: ''
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              if (data) {
                this.product = data;
              } else {
                this.router.navigate(['/products']);
              }
            },
            error: (err) => {
              this.router.navigate(['/']);
            }
          })
      }
    });
  }
}
