import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesGeraisModule } from './componentes-gerais/componentes-gerais.module';
import { LoginModule } from './login/login.module';
import { SistemaModule } from './sistema/sistema.module';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    SistemaModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatInputModule
  ],
  exports:[
    // MatInputModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
