import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dish } from '../../shared/dish.model';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent {
  @Input() dish!: Dish;

  constructor(private cartService: CartService) {}

  onClick() {
    this.cartService.addDishToCart(this.dish);
  }
}
