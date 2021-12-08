import { Component, ElementRef, ViewChild } from '@angular/core';
import { DishService } from '../shared/dish.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.css'],
})
export class NewDishComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('imageUrlInput') imageUrlInput!: ElementRef;
  @ViewChild('priceInput') priceInput!: ElementRef;

  constructor(
    public dishService: DishService,
    public http: HttpClient,
  ) {}

  createDish() {
    const name: string = this.nameInput.nativeElement.value;
    const description: string = this.descriptionInput.nativeElement.value;
    const imageUrl: string = this.imageUrlInput.nativeElement.value;
    const price = parseFloat(this.priceInput.nativeElement.value);

    const body = {name, description, imageUrl, price};
    this.http.post('https://plovo-js13-default-rtdb.firebaseio.com/dishes.json', body).subscribe();

    // const dish = new Dish(name, description, imageUrl, price);
    // this.dishService.addDish(dish);
  }
}
