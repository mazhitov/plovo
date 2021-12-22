import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DishService } from '../../../shared/dish.service';
import { Dish } from '../../../shared/dish.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.css'],
})
export class EditDishComponent implements OnInit, OnDestroy {
  @ViewChild('f') dishForm!: NgForm;

  isEdit = false;
  editedId = '';

  isUploading = false;
  dishUploadingSubscription!: Subscription;

  constructor(
    private dishService: DishService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.dishUploadingSubscription = this.dishService.dishUploading.subscribe((isUploading: boolean) => {
      this.isUploading = isUploading;
    });

    this.route.data.subscribe(data => {
      const dish = <Dish | null>data.dish;

      if (dish) {
        this.isEdit = true;
        this.editedId = dish.id;
        this.setFormValue({
          name: dish.name,
          description: dish.description,
          imageUrl: dish.imageUrl,
          price: dish.price
        });
      } else {
        this.isEdit = false;
        this.editedId = '';
        this.setFormValue({
          name: '',
          description: '',
          imageUrl: '',
          price: '',
        });
      }
    });
  }

  setFormValue(value: {[key: string]: any}) {
    setTimeout(() => {
      this.dishForm.form.setValue(value); // {name: '', description: '', imageUrl: '', price: ''}
    });
  }

  saveDish() {
    const id = this.editedId || Math.random().toString();
    const dish = new Dish(
      id,
      this.dishForm.value.name,
      this.dishForm.value.description,
      this.dishForm.value.imageUrl,
      this.dishForm.value.price
    );

    const next = () => {
      this.dishService.fetchDishes();
      void this.router.navigate(['..'], {relativeTo: this.route});
    };

    if (this.isEdit) {
      this.dishService.editDish(dish).subscribe(next);
    } else {
      this.dishService.addDish(dish).subscribe(next);
    }
  }

  ngOnDestroy(): void {
    this.dishUploadingSubscription.unsubscribe();
  }
}
