import { Dish } from './dish.model';
import { EventEmitter } from '@angular/core';

export class DishService {
  dishesChange = new EventEmitter<Dish[]>();

  private dishes: Dish[] = [
    new Dish('Pilaf', 'Very tasty pilaf', 'https://krollskorner.com/wp-content/uploads/2019/10/riceblog8.jpg', 250),
    new Dish('Another pilaf', 'Another tasty pilaf', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtY9mM4oD1Nqmw9TARQOpgSqfKdaN5LMN6g&usqp=CAU', 200),
  ];

  getDishes() {
    return this.dishes.slice();
  }

  addDish(dish: Dish) {
    this.dishes.push(dish);
    this.dishesChange.emit(this.dishes);
  }
}
