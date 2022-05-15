import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemaComponent } from './sistema.component';
import { SistemaRoutingModule } from './sistema-routing.module';
import { SaidasModule } from './saidas/saidas.module';
import { CadastrosModule } from './cadastros/cadastros.module';
import { EntradasModule } from './entradas/entradas.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//imports do material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon'; 

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
    SistemaRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SistemaModule { }
