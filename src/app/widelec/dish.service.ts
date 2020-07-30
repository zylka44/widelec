import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dish, DishAttrs } from './dish';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<DishAttrs[]>(`${environment.apiUrl}/dishes`).pipe(
      map((data) => data.map((dishAttrs) => new Dish(dishAttrs)))
    );
  }

  getDish(id: number) {
    return this.http.get<DishAttrs>(`${environment.apiUrl}/dishes/${id}`).pipe(
       map((dishAttrs) => new Dish(dishAttrs))
    );
  }

  saveDish(dishAttrs: DishAttrs): Observable<Dish> {
    if (dishAttrs.id) {
      return this.updateDish(dishAttrs);
    } else {
      return this.createDish(dishAttrs);
    }
  }

  private createDish(data: DishAttrs): Observable<Dish> {
    return this.http.post<DishAttrs>(`${environment.apiUrl}/dishes`, data).pipe(
      map((dishAttrs) => new Dish(dishAttrs))
    );
  }

  private updateDish(data: DishAttrs): Observable<Dish> {
    return this.http.put<DishAttrs>(`${environment.apiUrl}/dishes/${data.id}`, data).pipe(
      map((dishAttrs) => new Dish(dishAttrs))
    );
  }
}
