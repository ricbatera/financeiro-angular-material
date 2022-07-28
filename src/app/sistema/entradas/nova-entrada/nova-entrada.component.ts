import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  obrasList: Observable<Obra[]>
  empresasJavaList: Observable<EmpresasJavaGas[]>
  formulario: FormGroup;

  constructor(
    private db : DatabaseServiceService,
    private formBuilder: FormBuilder,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {
    this.obrasList = this.db.listarTodasObrasAtivas();
    this.empresasJavaList = this.db.listarEmpresasJavaGas();

    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      empresaId: [null, [Validators.required]],
      valorEsperado: [null, [Validators.required]],
      dataVencimento: [null, [Validators.required]],
      obs: [null, [Validators.required]],
      obraId: [null, [Validators.required]],
      recebido: [null, [Validators.required]]
    });
   }

  ngOnInit(): void {
   
  }
  
  carregaEmpresas(){
    console.log("iniciando")
  }

  salvar(){
    console.log('Iniciando o processo de salvamento da nova entrada');
    if (this.formulario?.valid) {
      // this.db.novaSaida(this.formulario.value).subscribe(res=>{
      //   this._snackBar.open('Salvo com sucesso', 'Ok', {duration: 2000})
      //   this.route.navigate([`sistema/saidas/lista-saida`])
      // })
      // this.limparForm();
    } else {
      Object.keys(this.formulario.controls).forEach(e => {
        const campo: any = this.formulario?.get(e);
        campo.markAsTouched();
        this._snackBar.open('Preencha todos os campos obrigatórios do formulário!', 'Fechar', {duration: 3000})
      })
    }
    // console.log(this.formulario);
    console.log(this.formulario.value);
  }

  limparForm() {
    this.formulario?.reset();
  }

  validaCampo(campo: string) {
    const c: any = this.formulario?.get(campo)
    if (c.touched) {
      return c.valid;
    }
    return true;
  }

}
