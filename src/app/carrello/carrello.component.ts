import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FormBuilder, Validators } from '@angular/forms';
import { products } from '../interface/product';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  ngOnInit(): void {
    }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    alert('Il tuo ordine è stato processato!');
    console.warn('Il tuo ordine è stato processato!', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
