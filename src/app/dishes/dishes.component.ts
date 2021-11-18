import { Component, EventEmitter, Output } from '@angular/core';
import { Dish } from '../shared/dish.model';
import { DishService } from '../shared/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent  {
  @Output() dishAddedToCart = new EventEmitter<Dish>();

  constructor(public dishService: DishService) {}

  onDishClick(dish: Dish) {
    this.dishAddedToCart.emit(dish);
  }
}
