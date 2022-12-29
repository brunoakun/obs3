import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myList: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(product: Product) {
    this.myList.push(product);
    this.myCart.next(this.myList);
  }

  delProduct(index: number) {
    this.myList.splice(index, 1);
    this.myCart.next(this.myList);    // Emite la lista a los subscriptores
  }

}
