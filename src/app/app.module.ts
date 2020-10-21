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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpInterceptorAuthService} from './services/http-interceptor-auth.service';
import { RegisterComponent } from './services/register/register.component';
import { AdminBoardComponent } from './admin-board/admin-board.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    VetsComponent,
    ErrorComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminBoardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorAuthService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
