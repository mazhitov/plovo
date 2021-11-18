import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewDishComponent } from './new-dish/new-dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishItemComponent } from './dishes/dish-item/dish-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { FormsModule } from '@angular/forms';
import { DishService } from './shared/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NewDishComponent,
    DishesComponent,
    DishItemComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
