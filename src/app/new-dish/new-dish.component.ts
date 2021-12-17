import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DishService } from '../shared/dish.service';
import { Dish } from '../shared/dish.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.component.html',
  styleUrls: ['./new-dish.component.css'],
})
export class NewDishComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('descriptionInput') descriptionInput!: ElementRef;
  @ViewChild('imageUrlInput') imageUrlInput!: ElementRef;
  @ViewChild('priceInput') priceInput!: ElementRef;

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
  }

  createDish() {
    const name: string = this.nameInput.nativeElement.value;
    const description: string = this.descriptionInput.nativeElement.value;
    const imageUrl: string = this.imageUrlInput.nativeElement.value;
    const price = parseFloat(this.priceInput.nativeElement.value);
    const id = Math.random().toString();
    const dish = new Dish(id, name, description, imageUrl, price);

    this.dishService.addDish(dish).subscribe(() => {
      this.dishService.fetchDishes();
      void this.router.navigate(['..'], {relativeTo: this.route});
    });
  }

  ngOnDestroy(): void {
    this.dishUploadingSubscription.unsubscribe();
  }
}
