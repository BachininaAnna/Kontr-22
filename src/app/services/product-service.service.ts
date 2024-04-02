import {Injectable, OnInit} from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ProductService implements OnInit{
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`);
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.site/order-tea`, data);
  }

  searchProducts(name: string){
    return this.http.get<ProductType[]>(`https://testologia.site/tea?search=${name}`);
  }
}
