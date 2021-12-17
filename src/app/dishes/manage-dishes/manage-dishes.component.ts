import { Component, OnDestroy, OnInit } from '@angular/core';
import { DishService } from '../../shared/dish.service';
import { Dish } from '../../shared/dish.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-dishes',
  templateUrl: './manage-dishes.component.html',
  styleUrls: ['./manage-dishes.component.css']
})
export class ManageDishesComponent implements OnInit, OnDestroy {
  dishes: Dish[] = [];
  dishesChangeSubscription!: Subscription;
  dishesFetchingSubscription!: Subscription;
  isFetching = false;

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
    this.dishesChangeSubscription = this.dishService.dishesChange.subscribe((dishes: Dish[]) => {
      this.dishes = dishes;
    });
    this.dishesFetchingSubscription = this.dishService.dishesFetching.subscribe((isFetching: boolean) => {
      this.isFetching = isFetching;
    });
    this.dishService.fetchDishes();
  }

  ngOnDestroy() {
    this.dishesChangeSubscription.unsubscribe();
    this.dishesFetchingSubscription.unsubscribe();
  }
}
