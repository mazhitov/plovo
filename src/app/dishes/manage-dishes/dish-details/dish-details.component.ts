import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from '../../../shared/dish.service';
import { Dish } from '../../../shared/dish.model';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit {
  dish: Dish | null = null;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const dishId = parseInt(params['id']);
      this.dish = this.dishService.getDish(dishId);
    });
  }

}
