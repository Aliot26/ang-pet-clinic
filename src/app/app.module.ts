import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';
import {VetsComponent} from './vets/vets.component';
import {ErrorComponent} from './error/error.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    VetsComponent,
    ErrorComponent,
    WelcomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
