import { Component, OnInit } from '@angular/core';
import { DishService } from '../../shared/dish.service';
import { Dish } from '../../shared/dish.model';

@Component({
  selector: 'app-manage-dishes',
  templateUrl: './manage-dishes.component.html',
  styleUrls: ['./manage-dishes.component.css']
})
export class ManageDishesComponent implements OnInit {
  dishes: Dish[] = [];
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
    this.dishService.dishesChange.subscribe((dishes: Dish[]) => {
      this.dishes = dishes;
    });
  }

}
