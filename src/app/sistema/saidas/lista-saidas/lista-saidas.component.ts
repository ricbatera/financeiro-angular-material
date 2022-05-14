import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaidaService } from 'src/app/massas-dados/saida.service';

@Component({
  selector: 'app-lista-saidas',
  templateUrl: './lista-saidas.component.html',
  styleUrls: ['./lista-saidas.component.css']
})
export class ListaSaidasComponent implements OnInit {

  lista: any[] = [];

  constructor(
    private mockLista: SaidaService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.lista = this.mockLista.gerarSaidas(20);
    console.log(this.lista)
  }

  abrirDetalhes(ev:any){
    this.route.navigate([`sistema/saidas/lista/detalhes/${ev.path[1].id}`])
  }
}
