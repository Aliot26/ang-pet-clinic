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

import {AdminBoardComponent} from './admin-board/admin-board.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpInterceptorAuthService} from './services/http-interceptor-auth.service';
import { UsersComponent } from './users/users.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';

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
    AdminBoardComponent,
    UsersComponent,
    OwnerDetailsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorAuthService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
