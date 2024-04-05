import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product-service.service";
import {ProductType} from "../../../types/product.type";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchProductsService} from "../../../services/search-products.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              public searchService: SearchProductsService) {
  }

  products: ProductType[] = [];
  loading: boolean = false;
  subscription: Subscription | null = null;
  subscriptionSearch: Subscription | null = null;

  ngOnInit() {
    this.loading = true;
    this.subscriptionSearch = this.activatedRoute.params.subscribe((params) => {
      this.searchService.foundProducts();
      if (params['search']) {
        this.productService.searchProducts(params['search'])
          .subscribe(data => {
            if (data.length) {
              this.products = data;
            } else {
              this.searchService.notFoundProducts();
            }
          })
      } else {
        this.subscription = this.productService.getProducts()
          .subscribe({
            next: (data) => {
              this.loading = false;
              this.products = data;
            },
            error: (error) => {
              this.loading = false;
              console.log(error);
              this.router.navigate(['/']);
            }
          })
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionSearch?.unsubscribe();
  }
}

