import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish.model';
import { DishService } from '../shared/dish.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent implements OnInit {
  dishes!: Dish[];
  loading = false;

  constructor(
    private dishService: DishService,
    private http: HttpClient,
  ) {
  }

  ngOnInit() {
    this.loading = true;
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
        this.loading = false;
      });

    // this.dishes = this.dishService.getDishes();
    // this.dishService.dishesChange.subscribe((dishes: Dish[]) => {
    //   this.dishes = dishes;
    // });
  }
}
