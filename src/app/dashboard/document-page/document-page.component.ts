import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Stock from 'src/app/shared/models/stock-model';

@Component({
  selector: 'app-document-page',
  templateUrl: './document-page.component.html',
  styleUrls: ['./document-page.component.css']
})
export class DocumentPageComponent implements OnInit {

    form!: FormGroup
  
  
    stocks: Stock[] = [];
  
  /*  constructor(private DocumentService: DocumentService,
      private fb: FormBuilder,
      ) {
          this.form = this.fb.group({
          nome: [null, Validators.required],
          username: [null, Validators.required],
          cpf: [null, Validators.required],
          dataNascimento: [null, Validators.required],
          sexo: [null, Validators.required],
          celular: [null, Validators.required],
          email: [null, Validators.required],
          password: [null, Validators.required],
        });
  

     }
  

  
    login():void{
      console.log(this.form.getRawValue());
      }
  
    async fetchStocks(): Promise<void> {
      this.stocks = await this.DocumentService.getStocks();
      console.log(this.stocks);
    }
  }
  */
  ngOnInit(): void {
  }
}