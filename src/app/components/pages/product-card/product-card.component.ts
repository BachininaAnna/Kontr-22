import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addToCart(product: string){
    this.cartService.product = product;
    this.router.navigate(['/order']);
  }
}
