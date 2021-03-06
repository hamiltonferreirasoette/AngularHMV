import { DashboardModule } from './dashboard/dashboard.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
import { RegisterModule } from './dashboard/register.module';
import { RegisterPModule } from './dashboard/registerP.module';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DocumentModule } from './dashboard/document.module';
import { LoginModule } from './dashboard/login.module';
import { SelectModule } from './dashboard/select.module';



registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SelectModule,
    AppRoutingModule,
    DashboardModule,
    RegisterModule,
    RegisterPModule,
    DocumentModule,
    LoginModule,
    SharedModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
   // NgxMaskModule.forRoot(),    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
