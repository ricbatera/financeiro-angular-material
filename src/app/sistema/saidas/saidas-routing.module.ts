import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesSaidasComponent } from './detalhes-saidas/detalhes-saidas.component';
import { ListaSaidasComponent } from './lista-saidas/lista-saidas.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaidasRoutingModule { }
