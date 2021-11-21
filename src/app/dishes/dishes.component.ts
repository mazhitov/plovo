import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Dish } from '../shared/dish.model';
import { DishService } from '../shared/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent implements OnInit {
  dishes!: Dish[];
  constructor(private dishService: DishService) {}

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.dishService.dishesChange.subscribe((dishes: Dish[]) => {
      this.dishes = dishes;
    });
  }
}
