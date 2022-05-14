import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SaidasModule } from './saidas/saidas.module';
import { CadastrosModule } from './cadastros/cadastros.module';
import { EntradasModule } from './entradas/entradas.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SistemaComponent
  ],
  imports: [
    CommonModule,
    SaidasModule,
    CadastrosModule,
    EntradasModule,
    FormsModule,
    ReactiveFormsModule,
    SistemaRoutingModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SistemaModule { }
