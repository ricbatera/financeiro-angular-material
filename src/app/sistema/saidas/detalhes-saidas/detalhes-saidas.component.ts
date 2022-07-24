import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SaidaService } from 'src/app/massas-dados/saida.service';
import { DatabaseServiceService } from 'src/app/services/database-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { categoria } from 'src/app/model/categoria';
import { EmpresasJavaGas } from 'src/app/model/empresas-javagas';

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
    public dialog: MatDialog,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.parametros.params.subscribe(parametros=>{
      this.id = parametros['id'];    
      this.db.getSaidaById(parametros['id']).subscribe(res=>{
        this.saida = res;
        console.log(res);
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
        // location.reload();
        this.route.navigate([`sistema/saidas`])
        this.route.navigate([`sistema/saidas/lista-saida`])
        // this.db.getSaidaById(this.id).subscribe(result=>{
        //   this.saida = result;
        // })
      })
     
    });
  }
  
  openDialogEditar(): void{
    const dialogRef = this.dialog.open(DialogEditar, {
      data: this.saida,
      width: '500px',
    })
    dialogRef.afterClosed().subscribe(result => {
        this.db.atualizarSaida(result.value).subscribe(res=>{
          this.route.navigate([`sistema/saidas`]);
          this.route.navigate([`sistema/saidas/lista-saida`])
        }, err =>{
          console.log(err)
          alert("Erro ao processar sua solicitação. Consulte o Administrador do sistema.")
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

@Component({
  selector: 'app-dialog-editar',
  templateUrl: './dialog-editar.html'
})
export class DialogEditar{

  formulario: FormGroup;
  categoriasList?: Observable<categoria[]>;
  empresasJavaList?: Observable<EmpresasJavaGas[]>

  constructor(
    public dialogRef: MatDialogRef<DialogEditar>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private formBuilder: FormBuilder,
    private db: DatabaseServiceService,
  ){
    this.empresasJavaList = this.db.listarEmpresasJavaGas();
    this.categoriasList = this.db.listarCategorias();
    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      empresaId: [null, [Validators.required]],
      categoriaId: [null, [Validators.required]],
      valorEsperado: [null, [Validators.required]],
      dataVencimento: [null, [Validators.required]],
      atualizarValorParcelasFuturas: [false],
      id: [null],
      idParcelaAtual: [null],
      obs: [null, [Validators.required]]
    });
    
    this.formulario.get('idParcelaAtual')?.setValue(this.data.parcelaAtual.id);
    this.formulario.get('obs')?.setValue(this.data.obs);
    this.formulario.get('id')?.setValue(this.data.id);
    this.formulario.get('dataVencimento')?.setValue(this.data.parcelaAtual.dataVencimento);
    this.formulario.get('valorEsperado')?.setValue(this.data.parcelaAtual.valorEsperado);
    this.formulario.get('descricao')?.setValue(this.data.descricao);
    this.formulario.get('empresaId')?.setValue(this.data.empresaId.id);
    this.formulario.get('categoriaId')?.setValue(this.data.categoriaId.id);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validaCampo(campo: string) {
    const c: any = this.formulario?.get(campo)
    if (c.touched) {
      return c.valid;
    }
    return true;
  }
}
