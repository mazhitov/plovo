import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Dish } from '../shared/dish.model';
import { Observable } from 'rxjs';
import { DishService } from '../shared/dish.service';

@Injectable({
  providedIn: 'root'
})
export class DishResolverService implements Resolve<Dish> {

  constructor(private dishService: DishService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dish> {
    const dishId = <string>route.params['id'];
    return this.dishService.fetchDish(dishId);
  }
}
