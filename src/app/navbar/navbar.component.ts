import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  incrementoProd() {
    return this.cartService.incrementoProd();
  }

}
