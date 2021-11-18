import {Component} from '@angular/core';
import {Dish} from './shared/dish.model';
import { CartItem } from './shared/cart-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartItems: CartItem[] = [];

  onDishAddedToCart(dish: Dish) {
    const cartItem = new CartItem(dish);
    this.cartItems.push(cartItem);
  }
}
