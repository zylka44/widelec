import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishResolver } from './dish-resolver';


const routes: Routes = [
  {
    path: 'widelec',
    component: MainComponent
  },
  {
    path: 'widelec/dishes/:id',
    component: AddDishComponent,
    resolve: {dish: DishResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidelecRoutingModule { }
