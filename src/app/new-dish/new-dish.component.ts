import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Dish} from "../shared/dish.model";

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.css']
})
export class NewDishComponent {
  @Output() newDish = new EventEmitter<Dish>();
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('imageUrlInput') imageUrlInput!: ElementRef;
  @ViewChild('priceInput') priceInput!: ElementRef;

  createDish() {
    const name: string = this.nameInput.nativeElement.value;
    const description: string = this.descriptionInput.nativeElement.value;
    const imageUrl: string = this.imageUrlInput.nativeElement.value;
    const price = parseFloat(this.priceInput.nativeElement.value);

    const dish = new Dish(name, description, imageUrl, price);
    this.newDish.emit(dish);
  }
}
