import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaidaService } from 'src/app/massas-dados/saida.service';

@Component({
  selector: 'app-detalhes-saidas',
  templateUrl: './detalhes-saidas.component.html',
  styleUrls: ['./detalhes-saidas.component.css']
})
export class DetalhesSaidasComponent implements OnInit {
  id = 0;
  lista: any[] = [];
  itemSelecionado: any;

  constructor(
    private parametros: ActivatedRoute,
    private mock: SaidaService
  ) { }

  ngOnInit(): void {
    this.lista = this.mock.gerarSaidas(20);
    this.parametros.params.subscribe(parametros=>{
      this.id = parametros['id'];
      this.recarrega(this.id);
    })
  }

  recarrega(v:any){
    this.itemSelecionado = this.lista[v]
    console.log(this.itemSelecionado);
    console.log(v);
  }

}
