import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes-container',
  templateUrl: './dishes-container.component.html',
  styleUrls: ['./dishes-container.component.css']
})
export class DishesContainerComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe({
      next: (dishes) => this.dishes = dishes,
      error: () => alert('Nie udało się pobrać dań')
    });
  }

}
