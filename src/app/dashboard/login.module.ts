import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginPageComponent
  ],
})
export class LoginModule { }
