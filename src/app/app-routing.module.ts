import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './dashboard/register-page/register-page.component';
import { RegisterPPageComponent } from './dashboard/registerP-page/registerP-page.component';
import { LoginPageComponent } from './dashboard/login-page/login-page.component';
import { DocumentPageComponent } from './dashboard/document-page/document-page.component';
import { SelectComponent } from './dashboard/select-page/select-page.component';

const routes: Routes = [
  { path: 'document', component: DocumentPageComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'registerP', component:RegisterPPageComponent},
  {path:'login' , component: LoginPageComponent},
  {path:'select' , component: SelectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
