import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SaidaService } from 'src/app/massas-dados/saida.service';
import { DatabaseServiceService } from 'src/app/services/database-service.service';

@Component({
  selector: 'app-detalhes-saidas',
  templateUrl: './detalhes-saidas.component.html',
  styleUrls: ['./detalhes-saidas.component.css']
})
export class DetalhesSaidasComponent implements OnInit {
  // id = 0;
  displayedColumns = ['valorEsperado', 'valorEfetivo', 'dataVencimento', 'dataPagamento', 'status'];
  saida:any;

  constructor(
    private parametros: ActivatedRoute,
    private db: DatabaseServiceService
  ) { }

  ngOnInit(): void {
    this.parametros.params.subscribe(parametros=>{
      // this.id = parametros['id'];    
      this.db.getSaidaById(parametros['id']).subscribe(res=>{
        this.saida = res;
      })
    });

  }

 

}
