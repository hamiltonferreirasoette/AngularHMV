import { RegisterService } from '../register.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  form!: FormGroup

  constructor(private RegisterService: RegisterService,
    private fb: FormBuilder,
    private router: Router
    ) {
        this.form = this.fb.group({
        name: [null, Validators.required],
        email: [null, Validators.required],
        password: [null, Validators.required],
        cpf: [null, Validators.required],
        sex: [null, Validators.required],
        gender: [null, Validators.required],
        crm: [null, Validators.required],
        birthday: [null, Validators.required],
        phones: this.fb.array([]),
        specialties: this.fb.array([]),

      });


   }

  ngOnInit(): void {
  }

  register():void{
    this.RegisterService.Register(this.form.getRawValue())
    .subscribe  (_ => {this.router.navigate (['login'])
                                      })
  }





}
