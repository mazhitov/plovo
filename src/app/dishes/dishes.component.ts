import {Component, Input} from '@angular/core';
import {Dish} from "../shared/dish.model";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent  {
  @Input() dishes!: Dish[];
}
