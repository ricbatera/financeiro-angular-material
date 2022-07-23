import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaidasRoutingModule } from './saidas-routing.module';
import { SaidasComponent } from './saidas.component';
import { ListaSaidasComponent } from './lista-saidas/lista-saidas.component';
import { SaidaService } from 'src/app/massas-dados/saida.service';
import { DetalhesSaidasComponent, DialogSalvar } from './detalhes-saidas/detalhes-saidas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NovaSaidaComponent } from './nova-saida/nova-saida.component';
import { ComponentesGeraisModule } from 'src/app/componentes-gerais/componentes-gerais.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';

//componentes material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle'


@NgModule({
  declarations: [
    SaidasComponent,
    ListaSaidasComponent,
    DetalhesSaidasComponent,
    NovaSaidaComponent,
    DialogSalvar
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentesGeraisModule,
    CurrencyMaskModule,
    SaidasRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  providers: [SaidaService],
})
export class SaidasModule { }
