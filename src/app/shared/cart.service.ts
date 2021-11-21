import { EventEmitter } from '@angular/core';
import { CartItem } from './cart-item.model';
import { Dish } from './dish.model';

export class CartService {
  cartItemsChange = new EventEmitter<CartItem[]>();
  private cartItems: CartItem[] = [];

  getItems() {
    return this.cartItems.slice();
  }

  addDishToCart(dish: Dish) {
    const existingItem = this.cartItems.find(cartItem => cartItem.dish === dish);

    if (existingItem) {
      existingItem.amount++;
    } else {
      const newItem = new CartItem(dish);
      this.cartItems.push(newItem);
    }

    this.cartItemsChange.emit(this.cartItems);
  }
}
