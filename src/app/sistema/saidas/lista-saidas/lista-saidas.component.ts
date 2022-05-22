import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { SaidaService } from 'src/app/massas-dados/saida.service';

//Componentes Material
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DatabaseServiceService } from 'src/app/services/database-service.service';
import { Observable } from 'rxjs';
import {SaidaForList} from 'src/app/model/SaidaForList';

@Component({
  selector: 'app-lista-saidas',
  templateUrl: './lista-saidas.component.html',
  styleUrls: ['./lista-saidas.component.css']
})
export class ListaSaidasComponent {
  displayedColumns: string[] = ['descricao', 'vencimento', 'valor', 'situacao', 'acao'];
  listaSaidas?: SaidaForList[];
  dataSource!: MatTableDataSource<SaidaForList>;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //apagar variaveis abaixo
  lista: any[] = [];


  constructor(
    private mockLista: SaidaService,
    private route: Router,
    private db: DatabaseServiceService
    ) { 
      this.carregaListaSaidas();
      // this.dataSource = new MatTableDataSource(this.l);
    }  

  ngOnInit(): void {
    
  }

  aplicaFiltro(ev:Event){
    const filterValue = (ev.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  carregaListaSaidas(){
    this.db.listarSaidasMensal().subscribe(res=>{
      console.log(res);
      this.listaSaidas = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  pagarParcela(ev:any){
    console.log(ev)
  }

  pago(valor: any){
    if(valor.situacao == "Pago"){
      return false
    }else{
      return true
    }
  }

  abrirDetalhes(ev:any){
    this.route.navigate([`sistema/saidas/lista/detalhes/${ev.path[1].id}`])
  }
}
