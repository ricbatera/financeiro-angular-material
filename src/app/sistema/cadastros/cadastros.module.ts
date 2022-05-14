import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrosComponent } from './cadastros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCampoObrigatorioComponent } from 'src/app/componentes-gerais/form-campo-obrigatorio/form-campo-obrigatorio.component';
import { ComponentesGeraisModule } from 'src/app/componentes-gerais/componentes-gerais.module';



@NgModule({
  declarations: [
    CadastrosComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesGeraisModule,
    CadastrosRoutingModule
  ]
})
export class CadastrosModule { }
