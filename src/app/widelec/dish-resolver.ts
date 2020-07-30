import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Dish } from './dish';
import { DishService } from './dish.service';

@Injectable({
  providedIn: 'root'
})
export class DishResolver implements Resolve<Dish> {
  constructor(private dishService: DishService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dish> {
    if (route.params.id === 'new') {
      return of(new Dish());
    } else {
      return this.dishService.getDish(route.params.id);
    }
  }

}
