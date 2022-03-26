import { SelectService } from '../select.service';
import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectComponent implements OnInit {

  form!: FormGroup

  constructor(private SelectService: SelectService,
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
        address: [null, Validators.required],
        zipCode: [null, Validators.required],
        birthday: [null, Validators.required],
        motherName: [null, Validators.required],
        phones: this.fb.array([]),
        diseases: this.fb.array([]),

      });


   }

  ngOnInit(): void {
  }

}

