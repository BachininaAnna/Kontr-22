import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {
  public getProducts(): ProductType[] {
    return [
      {
        image: 'product-1.png',
        title: 'Детокс чай лайм',
        description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
      },
      {
        image: 'product-1.png',
        title: 'Детокс чай лайм',
        description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
      },
      {
        image: 'product-1.png',
        title: 'Детокс чай лайм',
        description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
      },
      {
        image: 'product-1.png',
        title: 'Детокс чай лайм',
        description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
      },
      {
        image: 'product-1.png',
        title: 'Детокс чай лайм',
        description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
      },
      {
        image: 'product-1.png',
        title: 'Детокс чай лайм',
        description: 'Великолепный чай внесет в вашу жизнь яркие краски и вкус расслабления'
      },
    ]
  }

  constructor() { }
}
