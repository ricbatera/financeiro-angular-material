import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SaidaService } from 'src/app/massas-dados/saida.service';

//Componentes Material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseServiceService } from 'src/app/services/database-service.service';
import { Observable } from 'rxjs';
import { SaidaForList } from 'src/app/model/SaidaForList';
import { DatasService } from 'src/app/services/datas.service';

const lista = document.getElementsByClassName("mes");

@Component({
  selector: 'app-lista-saidas',
  templateUrl: './lista-saidas.component.html',
  styleUrls: ['./lista-saidas.component.css']

})
export class ListaSaidasComponent {
  displayedColumns: string[] = ['descricao', 'vencimento', 'valor', 'empresa', 'situacao'];
  dataSource!: MatTableDataSource<SaidaForList>;
  listaMeses = document.getElementsByClassName("mes");
  dataPesquisa: string;
  mesSelecionado: any = 10;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  //apagar variaveis abaixo
  lista: any[] = [];


  constructor(
    private mockLista: SaidaService,
    private route: Router,
    private db: DatabaseServiceService,
    private datasService: DatasService
  ) {
    this.dataPesquisa = datasService.getData();
    this.carregaListaSaidas();

    // this.dataSource = new MatTableDataSource(this.l);
  }

  ngOnInit(): void {
    this.listaMeses[this.datasService.getMesAtual()].classList.add('mes-selecionado');
    for (let i = 0; i < this.listaMeses.length; i++) {
      this.listaMeses[i].addEventListener('click', e => {
        for (let j = 0; j < this.listaMeses.length; j++) {
          this.listaMeses[j].classList.remove('mes-selecionado')
        }
        this.route.navigate([`sistema/saidas/lista-saida`])
        this.mesSelecionado = this.listaMeses[i].id;
        this.listaMeses[i].classList.add('mes-selecionado');
        this.carregaListaMesSelecionado();
      })
    }
  }

  aplicaFiltro(ev: Event) {
    const filterValue = (ev.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  carregaListaSaidas() {
    this.db.listarSaidasMensal(this.dataPesquisa).subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  pagarParcela(ev: any) {
    console.log(ev)
  }

  pago(valor: any) {
    if (valor.situacao == "Pago") {
      return false
    } else {
      return true
    }
  }

  abrirDetalhes(ev: any) {
    this.route.navigate([`sistema/saidas/lista-saida/detalhes/${ev}`])
  }

  carregaListaMesSelecionado() {
    this.dataPesquisa = this.datasService.getData(this.mesSelecionado);
    this.carregaListaSaidas();
  }
}
