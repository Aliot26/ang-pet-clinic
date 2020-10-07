import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VetsComponent} from './vets/vets.component';
import {ErrorComponent} from './error/error.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'vets', component: VetsComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
