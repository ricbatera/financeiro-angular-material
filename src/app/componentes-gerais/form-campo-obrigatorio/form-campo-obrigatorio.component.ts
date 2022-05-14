import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-campo-obrigatorio',
  templateUrl: './form-campo-obrigatorio.component.html',
  styleUrls: ['./form-campo-obrigatorio.component.css']
})
export class FormCampoObrigatorioComponent implements OnInit {

  @Input() mostraErro:boolean = false;
  @Input() msg:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
