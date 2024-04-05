import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product-service.service";
import {ProductType} from "../../../types/product.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  checkoutForms = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^(8|\\+7|7)[\\d]{10}$')]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('[0-9]{6}$')]],
    product: [''],
    address: ['', [Validators.required,
      Validators.pattern('^[а-яА-Я\\d\\s\\-\\/]{10,20}$')]],
    comment: [''],
  });

  product: ProductType;
  successResponse: boolean = false;
  errorResponse: boolean = false;
  subscription: Subscription | null = null;
  subscriptionOrder: Subscription | null = null;

  constructor(public fb: FormBuilder, private router: Router,
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
          .subscribe(data => {
            if (data) {
              this.product = data;
            }
          })
      } else {
        this.router.navigate(['/products']);
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  createOrder() {
    if (!this.checkoutForms.invalid) {

      this.subscriptionOrder = this.productService.createOrder({
        name: this.checkoutForms.get('name')?.value,
        last_name: this.checkoutForms.get('last_name')?.value,
        phone: this.checkoutForms.get('phone')?.value,
        country: this.checkoutForms.get('country')?.value,
        zip: this.checkoutForms.get('zip')?.value,
        product: this.product.title,
        address: this.checkoutForms.get('address')?.value,
        comment: this.checkoutForms.get('comment')?.value
      })
        .subscribe(response => {
          if (response.success && !response.message) {
            this.successResponse = true;
          } else {
            this.errorResponse = true;
          }
        })
    }
  }

  isInvalid(name: string): boolean | undefined {
    return this.checkoutForms.get(name)?.invalid
  }

  isDirty(name: string): boolean | undefined {
    return (this.checkoutForms.get(name)?.touched || this.checkoutForms.get(name)?.dirty);
  }

  isRequiredError(name: string): boolean | undefined {
    return this.checkoutForms.get(name)?.errors?.['required'];
  }

  isPatternError(name: string): boolean | undefined {
    return this.checkoutForms.get(name)?.errors?.['pattern'];
  }
}
