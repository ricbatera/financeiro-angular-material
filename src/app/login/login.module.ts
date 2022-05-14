import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { LoginRoutingModule } from './login-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 



@NgModule({
  declarations: [
    TelaLoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class LoginModule { }
