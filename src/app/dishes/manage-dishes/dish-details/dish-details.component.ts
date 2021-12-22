import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Dish } from '../../../shared/dish.model';
import { DishService } from '../../../shared/dish.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.css']
})
export class DishDetailsComponent implements OnInit, OnDestroy {
  dish!: Dish;

  isRemoving = false;
  dishRemovingSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dishService: DishService,
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.dish = <Dish>data.dish;
    });

    this.dishRemovingSubscription = this.dishService.dishRemoving.subscribe((isRemoving: boolean) => {
      this.isRemoving = isRemoving;
    });
  }

  onRemove() {
    this.dishService.removeDish(this.dish.id).subscribe(() => {
      this.dishService.fetchDishes();
      void this.router.navigate(['..'], {relativeTo: this.route});
    });
  }

  ngOnDestroy() {
    this.dishRemovingSubscription.unsubscribe();
  }
}
