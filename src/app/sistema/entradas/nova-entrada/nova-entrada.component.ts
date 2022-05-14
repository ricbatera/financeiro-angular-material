import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { EmpresasJavaGas } from 'src/app/model/empresas-javagas';
import { Obra } from 'src/app/model/Obra';
import { DatabaseServiceService } from 'src/app/services/database-service.service';

@Component({
  selector: 'app-nova-entrada',
  templateUrl: './nova-entrada.component.html',
  styleUrls: ['./nova-entrada.component.css']
})
export class NovaEntradaComponent implements OnInit {
  $: any;
  listaObras?: Observable<Obra[]>
  listaEmrpresasJavaGas?: Observable<EmpresasJavaGas[]>

  constructor(
    private db : DatabaseServiceService
  ) {

    this.listaObras = this.db.listarTodasObrasAtivas();
    this.listaEmrpresasJavaGas = this.db.listarEmpresasJavaGas();
   }

  ngOnInit(): void {
   
  }
  
  carregaEmpresas(){
    console.log("iniciando")
  }

}
