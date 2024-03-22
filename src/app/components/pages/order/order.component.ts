import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  checkoutForms = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[а-яА-Я]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+[0-9]{11}'), Validators.maxLength(12)]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required, Validators.pattern('[0-9]{6}'), Validators.maxLength(6)]],
    product: ['this.cartService.product'],
    address: ['', [Validators.required, Validators.pattern('^[а-яА-Я\\d\\s\\-\\/]+$'), Validators.minLength(10)]],
    comment: [''],
  });

  response: number = 0;
  successResponse: boolean = false;
  errorResponse: boolean = false;
  constructor(public cartService: CartService, private fb: FormBuilder) {
  }

  ngOnInit(): void {

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
  createOrder() {
    if (!this.checkoutForms.invalid) {
      console.log('valid all good');
    }
    if (this.response === 1){
      this.successResponse = !this.successResponse;
    }else{
      this.errorResponse = !this.errorResponse
    }
  }
}
