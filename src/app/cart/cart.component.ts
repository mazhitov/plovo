import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../shared/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartItems!: CartItem[];

  constructor() { }

  ngOnInit(): void {
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, cartItem) => {
      return sum + cartItem.getPrice();
    }, 0);
  }
}
