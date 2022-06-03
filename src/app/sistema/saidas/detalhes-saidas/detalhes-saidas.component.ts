import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  id = 0;
  displayedColumns = ['valorEsperado', 'valorEfetivo', 'dataVencimento', 'dataPagamento', 'status'];
  saida:any;

  constructor(
    private parametros: ActivatedRoute,
    private db: DatabaseServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.parametros.params.subscribe(parametros=>{
      this.id = parametros['id'];    
      this.db.getSaidaById(parametros['id']).subscribe(res=>{
        this.saida = res;
      })
    });
  }

  openDialogSalvar(): void{
    const dialogRef = this.dialog.open(DialogSalvar, {
      data: this.saida?.parcelaAtual,
      width: '500px',
    })
    dialogRef.afterClosed().subscribe(result => {
      this.db.pagarParcela(result, result.id).subscribe(res=>{
        this.db.getSaidaById(this.id).subscribe(result=>{
          this.saida = result;
        })
      })
     
    });
  }


}

@Component({
  selector: 'app-dialog-salvar',
  templateUrl: './dialog-salvar.html'
})
export class DialogSalvar{
  constructor(
    public dialogRef: MatDialogRef<DialogSalvar>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
