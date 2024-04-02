import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product-service.service";
import {ProductType} from "../../../types/product.type";
import {Router} from "@angular/router";
import {SearchProductsService} from "../../../services/search-products.service";
import {Observable} from "rxjs";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  observer: Observable<string>;
  constructor(private productService: ProductService,
              private router: Router,
              public searchProducts: SearchProductsService) {

    this.observer = new Observable((observer) => {

      console.log(observer.next(this.searchProducts.title));
    });
  }

  public products: ProductType[] = [];
  public loading: boolean = false;

  ngOnInit() {




    this.loading = true;


    this.productService.searchProducts(this.searchProducts.title)
      .subscribe(data => {
        console.log(this.searchProducts.title);
        console.log(data);
        this.products = data;
      })


    this.productService.getProducts()
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


    /* this.activatedRoute.params.subscribe((params) => {
       if (params['search']) {
         this.productService.searchProducts(params['search'])
           .subscribe(data => {
               console.log(params['search']);
               console.log(data);
               this.products = data;
           })
       } else {
         this.productService.getProducts()
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
     });*/
  }

}
