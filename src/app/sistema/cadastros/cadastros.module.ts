import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrosComponent } from './cadastros.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCampoObrigatorioComponent } from 'src/app/componentes-gerais/form-campo-obrigatorio/form-campo-obrigatorio.component';
import { ComponentesGeraisModule } from 'src/app/componentes-gerais/componentes-gerais.module';
import { ObrasComponent } from './obras/obras.component';

//componentes material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material/core';



@NgModule({
  declarations: [
    CadastrosComponent,
    CategoriasComponent,
    ObrasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesGeraisModule,
    CadastrosRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatNativeDateModule
  ]
})
export class CadastrosModule { }
