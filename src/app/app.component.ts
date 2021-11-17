import {Component} from '@angular/core';
import {Dish} from './shared/dish.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dishes: Dish[] = [
    new Dish('Pilaf', 'Very tasty pilaf', 'https://krollskorner.com/wp-content/uploads/2019/10/riceblog8.jpg', 250),
    new Dish('Another pilaf', 'Another tasty pilaf', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtY9mM4oD1Nqmw9TARQOpgSqfKdaN5LMN6g&usqp=CAU', 200),
  ];

  onNewDish(dish: Dish) {
    this.dishes.push(dish);
  }
}
