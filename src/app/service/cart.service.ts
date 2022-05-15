import {Injectable} from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products = [];
  items: Product[] = [];

  constructor() {
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  incrementoProd() {
    return this.items.length;
  }
}
