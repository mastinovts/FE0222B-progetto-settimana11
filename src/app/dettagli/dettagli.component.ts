import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../interface/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {
  product: any = products

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Il prodotto è stato aggiunto al tuo carrello!');
  }

}
