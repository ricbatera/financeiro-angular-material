import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaidasRoutingModule } from './saidas-routing.module';
import { SaidasComponent } from './saidas.component';
import { ListaSaidasComponent } from './lista-saidas/lista-saidas.component';
import { SaidaService } from 'src/app/massas-dados/saida.service';
import { DetalhesSaidasComponent } from './detalhes-saidas/detalhes-saidas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovaSaidaComponent } from './nova-saida/nova-saida.component';
import { ComponentesGeraisModule } from 'src/app/componentes-gerais/componentes-gerais.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
  declarations: [
    SaidasComponent,
    ListaSaidasComponent,
    DetalhesSaidasComponent,
    NovaSaidaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesGeraisModule,
    CurrencyMaskModule,
    SaidasRoutingModule
  ],
  providers: [SaidaService],
})
export class SaidasModule { }
