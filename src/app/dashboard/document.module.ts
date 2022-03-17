import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentPageComponent } from './document-page/document-page.component';


@NgModule({
  declarations: [
    DocumentPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    DocumentPageComponent
  ],
})
export class DocumentModule { }
