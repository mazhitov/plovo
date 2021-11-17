import {Component, Input} from '@angular/core';
import {Dish} from "../../shared/dish.model";

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent {
  @Input() dish!: Dish;
}
