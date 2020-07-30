import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidelecRoutingModule } from './widelec-routing.module';
import { LogoComponent } from './logo/logo.component';
import { DishesContainerComponent } from './dishes-container/dishes-container.component';
import { DishComponent } from './dish/dish.component';
import { MainComponent } from './main/main.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LogoComponent, DishesContainerComponent, DishComponent, MainComponent, AddDishComponent],
  exports: [
    MainComponent,
    LogoComponent,
    DishesContainerComponent
  ],
  imports: [
    CommonModule,
    WidelecRoutingModule,
    ReactiveFormsModule,
  ]
})
export class WidelecModule { }
