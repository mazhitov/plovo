import { Dish } from './dish.model';

export class CartItem {
  constructor(
    public dish: Dish,
    public amount: number = 1
  ) {}

  getPrice() {
    return this.dish.price * this.amount;
  }
}
