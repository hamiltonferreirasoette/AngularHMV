import { RegisterService } from '../register.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form!: FormGroup

  constructor(private RegisterService: RegisterService,
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

  ngOnInit(): void {
  }

  register():void{
    this.RegisterService.Register(this.form.getRawValue())
    .subscribe  (_ => {//redirecionar
                                      })
  }





}
