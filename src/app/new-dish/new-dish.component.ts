import { Component, ElementRef, ViewChild } from '@angular/core';
import { Dish } from '../shared/dish.model';
import { DishService } from '../shared/dish.service';

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

  constructor(public dishService: DishService) {}

  createDish() {
    const name: string = this.nameInput.nativeElement.value;
    const description: string = this.descriptionInput.nativeElement.value;
    const imageUrl: string = this.imageUrlInput.nativeElement.value;
    const price = parseFloat(this.priceInput.nativeElement.value);

    const dish = new Dish(name, description, imageUrl, price);
    this.dishService.dishes.push(dish);
  }
}
