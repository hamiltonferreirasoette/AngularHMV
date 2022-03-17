import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './dashboard/register-page/register-page.component';
import { LoginPageComponent } from './dashboard/login-page/login-page.component';
import { DocumentPageComponent } from './dashboard/document-page/document-page.component';

const routes: Routes = [
  { path: 'document', component: DocumentPageComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'' , component: LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
