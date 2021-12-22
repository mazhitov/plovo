import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EditDishComponent } from './dishes/manage-dishes/edit-dish/edit-dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishItemComponent } from './dishes/dish-item/dish-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { DishService } from './shared/dish.service';
import { CartService } from './shared/cart.service';
import { ModalComponent } from './ui/modal/modal.component';
import { ShadowHoverDirective } from './directives/shadow-hover.directive';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found.component';
import { ManageDishesComponent } from './dishes/manage-dishes/manage-dishes.component';
import { DishDetailsComponent } from './dishes/manage-dishes/dish-details/dish-details.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    EditDishComponent,
    DishesComponent,
    DishItemComponent,
    CartComponent,
    CartItemComponent,
    ModalComponent,
    ShadowHoverDirective,
    HomeComponent,
    NotFoundComponent,
    ManageDishesComponent,
    DishDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DishService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
