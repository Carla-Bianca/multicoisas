import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MultiCoisasComponent } from './produtos/produtos.component';
import { MultiCoisasListaComponent } from './produtos-lista/produtos-lista.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: MultiCoisasComponent },
  { path: 'produtos/:categoria', component: MultiCoisasListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
