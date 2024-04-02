import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product-service.service";
import {ProductType} from "../../../types/product.type";

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
    product: [''],
    address: ['', [Validators.required, Validators.pattern('^[а-яА-Я\\d\\s\\-\\/]+$'), Validators.minLength(10)]],
    comment: [''],
  });
  product: ProductType;
  response: number = 0;
  successResponse: boolean = false;
  errorResponse: boolean = false;

  constructor(private fb: FormBuilder, private router: Router,
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
          .subscribe(data => {
            if(data){
              this.product = data;
            }else{
              this.router.navigate(['/products']);
            }
          })
      }
    });

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
      console.log('valid');
      if (this.response === 1) {
        this.successResponse = !this.successResponse;
      } else {
        this.errorResponse = !this.errorResponse;
      }
    }
  }
}
