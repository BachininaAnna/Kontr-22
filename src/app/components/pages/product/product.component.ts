import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product-service.service";
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product:ProductType;
  constructor(private cartService: CartService,
              private router: Router,
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
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        const product = this.productService.getProduct(+params['id']);
        if(product){
          this.product = product;
        }else{
          this.router.navigate(['/']);
        }
      }
    })
  }

  addToCart(product: string) {
    this.cartService.product = product;
    this.router.navigate(['/order']);
  }

}
