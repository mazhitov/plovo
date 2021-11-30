import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/cart-item.model';
import { CartService } from '../shared/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems!: CartItem[];
  modalOpen = false;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.cartService.cartItemsChange.subscribe((cartItems: CartItem[]) => {
      this.cartItems = cartItems;
    });
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, cartItem) => {
      return sum + cartItem.getPrice();
    }, 0);
  }

  openCheckoutModal() {
    this.modalOpen = true;
  }

  closeCheckoutModal() {
    this.modalOpen = false;
  }

  continue() {
    void this.router.navigate(['/checkout']);
  }
}
