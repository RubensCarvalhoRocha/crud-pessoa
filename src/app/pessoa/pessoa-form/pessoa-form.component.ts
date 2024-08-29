import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.scss',
})
export class PessoaFormComponent implements OnInit {
  pessoaForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.pessoaForm = this.fb.group({
      cpf: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  onSubmit() {}
}
