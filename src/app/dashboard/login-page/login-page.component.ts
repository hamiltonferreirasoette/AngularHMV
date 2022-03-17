import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Stock from 'src/app/shared/models/stock-model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  stocks: Stock[] = [];

  constructor(private LoginService: LoginService, private fb: FormBuilder) {
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

  ngOnInit(): void {
    this.fetchStocks();
  }

  login(): void {
    console.log(this.form.getRawValue());
  }

  async fetchStocks(): Promise<void> {
    this.stocks = await this.LoginService.getStocks();
    console.log(this.stocks);
  }
}
