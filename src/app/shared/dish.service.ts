import { Dish } from './dish.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class DishService {
  dishesChange = new Subject<Dish[]>();
  dishesFetching = new Subject<boolean>();
  dishUploading = new Subject<boolean>();
  dishRemoving = new Subject<boolean>();

  private dishes: Dish[] = [];

  constructor(private http: HttpClient) {}

  getDishes() {
    return this.dishes.slice();
  }

  fetchDishes() {
    this.dishesFetching.next(true);
    this.http.get<{ [id: string]: Dish }>('https://plovo-js13-default-rtdb.firebaseio.com/dishes.json')
      .pipe(map(result => {
        if (result === null) {
          return [];
        }

        return Object.keys(result).map(id => {
          const dishData = result[id];
          return new Dish(id, dishData.name, dishData.description, dishData.imageUrl, dishData.price);
        });
      }))
      .subscribe(dishes => {
        this.dishes = dishes;
        this.dishesChange.next(this.dishes.slice());
        this.dishesFetching.next(false);
      }, () => {
        this.dishesFetching.next(false);
      });
  }

  getDish(index: number) {
    return this.dishes[index];
  }

  fetchDish(id: string) {
    return this.http.get<Dish | null>(`https://plovo-js13-default-rtdb.firebaseio.com/dishes/${id}.json`).pipe(
      map(result => {
        if (!result) {
          return null;
        }

        return new Dish(id, result.name, result.description, result.imageUrl, result.price);
      }),
    );
  }

  addDish(dish: Dish) {
    const body = {
      name: dish.name,
      description: dish.description,
      imageUrl: dish.imageUrl,
      price: dish.price,
    };

    this.dishUploading.next(true);

    return this.http.post('https://plovo-js13-default-rtdb.firebaseio.com/dishes.json', body).pipe(
      tap(() => {
        this.dishUploading.next(false);
      }, () => {
        this.dishUploading.next(false);
      })
    );
  }

  editDish(dish: Dish) {
    this.dishUploading.next(true);

    const body = {
      name: dish.name,
      description: dish.description,
      imageUrl: dish.imageUrl,
      price: dish.price,
    };

    return this.http.put(`https://plovo-js13-default-rtdb.firebaseio.com/dishes/${dish.id}.json`, body).pipe(
      tap(() => {
        this.dishUploading.next(false);
      }, () => {
        this.dishUploading.next(false);
      })
    );
  }

  removeDish(id: string) {
    this.dishRemoving.next(true);

    return this.http.delete(`https://plovo-js13-default-rtdb.firebaseio.com/dishes/${id}.json`).pipe(
      tap(() => {
        this.dishRemoving.next(false);
      }, () => {
        this.dishRemoving.next(false);
      })
    );
  }

}
