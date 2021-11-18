import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dish } from '../../shared/dish.model';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent {
  @Input() dish!: Dish;

  @Output() dishClick = new EventEmitter<Dish>();

  onClick() {
    this.dishClick.emit(this.dish);
  }
}
