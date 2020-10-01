import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VetsComponent} from './vets/vets.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: 'vets', component: VetsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
