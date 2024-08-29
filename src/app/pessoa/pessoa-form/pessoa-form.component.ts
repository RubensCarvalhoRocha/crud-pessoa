import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [FormsModule],
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
    });
  }
}
