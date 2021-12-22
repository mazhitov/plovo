import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Dish } from '../shared/dish.model';
import { EMPTY, Observable, of } from 'rxjs';
import { DishService } from '../shared/dish.service';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishResolverService implements Resolve<Dish> {

  constructor(private dishService: DishService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dish> | Observable<never> {
    const dishId = <string>route.params['id'];

    return this.dishService.fetchDish(dishId).pipe(mergeMap(dish => { // Dish | null
      if (dish) {
        return of(dish); // Observable<Dish>
      }

      void this.router.navigate(['/dishes']);
      return EMPTY; //Observable<never>
    }));
  }
}
