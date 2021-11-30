import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewDishComponent } from './new-dish/new-dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishItemComponent } from './dishes/dish-item/dish-item.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { DishService } from './shared/dish.service';
import { CartService } from './shared/cart.service';
import { ModalComponent } from './ui/modal/modal.component';
import { ShadowHoverDirective } from './directives/shadow-hover.directive';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dishes/new', component: NewDishComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NewDishComponent,
    DishesComponent,
    DishItemComponent,
    CartComponent,
    CartItemComponent,
    ModalComponent,
    ShadowHoverDirective,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
