import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product-service.service";
import {ProductType} from "../../../types/product.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy  {
  product: ProductType;
  subscription: Subscription | null = null;
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
    this.subscription = this.activatedRoute.params.subscribe((params) => {
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
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
