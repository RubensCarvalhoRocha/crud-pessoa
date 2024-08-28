import { Routes } from '@angular/router';
import { PessoaListComponent } from './pessoa/pessoa-list/pessoa-list.component';
import { PessoaViewComponent } from './pessoa/pessoa-view/pessoa-view.component';
import { PessoaFormComponent } from './pessoa/pessoa-form/pessoa-form.component';

export const routes: Routes = [
  { path: 'pessoas/list', component: PessoaListComponent },
  { path: 'pessoas/view', component: PessoaViewComponent },
  { path: 'pessoas/novo', component: PessoaFormComponent }
];
