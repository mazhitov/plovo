import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ManageDishesComponent } from './dishes/manage-dishes/manage-dishes.component';
import { EmptyDishComponent } from './dishes/manage-dishes/empty-dish.component';
import { EditDishComponent } from './dishes/manage-dishes/edit-dish/edit-dish.component';
import { DishDetailsComponent } from './dishes/manage-dishes/dish-details/dish-details.component';
import { NotFoundComponent } from './not-found.component';
import { DishResolverService } from './dishes/dish-resolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dishes', component: ManageDishesComponent, children: [
      {path: '', component: EmptyDishComponent}, // dishes/
      {path: 'new', component: EditDishComponent}, // dishes/new
      {
        path: ':id/edit', // dishes/:id/edit
        component: EditDishComponent,
        resolve: {dish: DishResolverService}
      },
      {
        path: ':id',
        component: DishDetailsComponent,
        resolve: {
          dish: DishResolverService
        }
      } // dishes/:id
    ]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
