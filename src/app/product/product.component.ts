import { Component, OnInit } from '@angular/core';
import { products } from '../interface/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any = products;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Il prodotto è stato aggiunto al tuo carrello!');
  }

}
