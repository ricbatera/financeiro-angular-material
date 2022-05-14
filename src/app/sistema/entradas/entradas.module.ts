import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradasComponent } from './entradas.component';
import { NovaEntradaComponent } from './nova-entrada/nova-entrada.component';
import { EntradasRoutingModule } from './entradas-routing.module';
import { ListaEntradasComponent } from './lista-entradas/lista-entradas.component';



@NgModule({
  declarations: [
    EntradasComponent,
    NovaEntradaComponent,
    ListaEntradasComponent
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule
  ]
})
export class EntradasModule { }
