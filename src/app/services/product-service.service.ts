import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  private products: ProductType[] =  [
    {
      id: 1,
      image: 'product-1.png',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
    },
    {
      id: 2,
      image: 'product-1.png',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
    },
    {
      id: 3,
      image: 'product-1.png',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
    },
    {
      id: 4,
      image: 'product-1.png',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
    },
    {
      id: 5,
      image: 'product-1.png',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
    },
    {
      id: 6,
      image: 'product-1.png',
      title: 'Детокс чай лайм',
      description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
    },
  ]
  public getProducts(): ProductType[] {
    return this.products
  }
  public getProduct(id: number): ProductType | undefined{
    return this.products.find(item => (item.id === id));
  }

  constructor() { }
}
