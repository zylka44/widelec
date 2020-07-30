import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.data
      .pipe(map((data) => data.dish))
      .subscribe((dish) => {
        this.form = new FormGroup({
          id: new FormControl(dish.id),
          name: new FormControl(dish.name, {
            validators: [Validators.required]
          }),
          imageUrl: new FormControl(dish.imageUrl, {
            validators: [Validators.required]
          }),
          difficulty: new FormControl(dish.difficulty, {
            validators: [Validators.required]
          }),
          vege: new FormControl(dish.vege, {
            validators: [Validators.required]
          }),
          sweet: new FormControl(dish.sweet, {
            validators: [Validators.required]
          }),
        });
      });
  }

  save(): void {
    const dishAttrs = this.form.value;
    this.dishService.saveDish(dishAttrs).subscribe(
      () => this.router.navigate(['../..'], {relativeTo: this.route}),
      () => alert('Nie udało się zapisać przepisu!')
    );
}

}
