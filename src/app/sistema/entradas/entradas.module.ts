import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradasComponent } from './entradas.component';
import { NovaEntradaComponent } from './nova-entrada/nova-entrada.component';
import { EntradasRoutingModule } from './entradas-routing.module';
import { ListaEntradasComponent } from './lista-entradas/lista-entradas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {MatCheckboxModule} from '@angular/material/checkbox'



@NgModule({
  declarations: [
    EntradasComponent,
    NovaEntradaComponent,
    ListaEntradasComponent
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule,
    ReactiveFormsModule,
    ComponentesGeraisModule,
    CurrencyMaskModule,
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
    MatButtonToggleModule,
    MatCheckboxModule
  ]
})
export class EntradasModule { }
