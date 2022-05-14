import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCampoObrigatorioComponent } from './form-campo-obrigatorio/form-campo-obrigatorio.component';



@NgModule({
  declarations: [
    FormCampoObrigatorioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormCampoObrigatorioComponent
  ]
})
export class ComponentesGeraisModule { }
