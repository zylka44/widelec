import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoSuchPlaceComponent } from './no-such-place/no-such-place.component';


const routes: Routes = [
  {path: '', redirectTo: 'widelec', pathMatch: 'full'},
  {path: '**', component: NoSuchPlaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
