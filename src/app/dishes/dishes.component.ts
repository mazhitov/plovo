import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dish } from '../shared/dish.model';
import { DishService } from '../shared/dish.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent implements OnInit, OnDestroy {
  dishes!: Dish[];
  loading = false;
  dishesChangeSubscription!: Subscription;
  dishesFetchingSubscription!: Subscription;

  constructor(private dishService: DishService,) {}

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
    this.dishesChangeSubscription = this.dishService.dishesChange.subscribe((dishes: Dish[]) => {
      this.dishes = dishes;
    });
    this.dishesFetchingSubscription = this.dishService.dishesFetching.subscribe((isFetching: boolean) => {
      this.loading = isFetching;
    });
    this.dishService.fetchDishes();
  }

  ngOnDestroy() {
    this.dishesChangeSubscription.unsubscribe();
    this.dishesFetchingSubscription.unsubscribe();
  }
}
