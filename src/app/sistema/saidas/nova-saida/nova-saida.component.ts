import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/massas-dados/categorias.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseServiceService } from 'src/app/services/database-service.service';
import { categoria } from 'src/app/model/categoria';
import { Observable } from 'rxjs';
import { EmpresasJavaGas } from 'src/app/model/empresas-javagas';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Obra } from 'src/app/model/Obra';
@Component({
  selector: 'app-nova-saida',
  templateUrl: './nova-saida.component.html',
  styleUrls: ['./nova-saida.component.css']
})
export class NovaSaidaComponent implements OnInit {
  //variáveis globais do componente
  $: any;
  categoriasList?: Observable<categoria[]>;
  obrasList?: Observable<Obra[]>;
  empresasJavaList?: Observable<EmpresasJavaGas[]>
  listaTeste?: categoria[];

  formulario: FormGroup;

  constructor(
    private categorias: CategoriasService,
    private formBuilder: FormBuilder,
    private db: DatabaseServiceService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {

    this.formulario = this.formBuilder.group({
      descricao: [null, [Validators.required]],
      empresaId: [null, [Validators.required]],
      categoriaId: [null, [Validators.required]],
      parcelado: [null, [Validators.required]],
      qtdeParcelas: [{ value: null, disabled: false }, [Validators.required]],
      valorEsperado: [null, [Validators.required]],
      custoImprevisto: [null, [Validators.required]],
      custoMensal: [null, [Validators.required]],
      dataVencimento: [null, [Validators.required]],
      obs: [null, [Validators.required]],
      obraId: [null, [Validators.required]],
      pago: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.empresasJavaList = this.db.listarEmpresasJavaGas();
    this.categoriasList = this.db.listarCategorias();
    this.obrasList = this.db.listarTodasObrasAtivas();
    // this.listarTeste();
    //this.listarTeste2();

    setTimeout(() => {
    }, 3000);

    console.log(this.formulario);
    console.log(this.formulario?.value);
  }

  listarTeste2() {
    this.empresasJavaList = this.db.listarEmpresasJavaGas();
  }
  listarTeste() {
    this.db.listarCategorias().subscribe(res => {
      this.listaTeste = res;
    })
  }

  salvar() {

    if (this.formulario?.valid) {
      this.db.novaSaida(this.formulario.value).subscribe(res=>{
        this._snackBar.open('Salvo com sucesso', 'Ok', {duration: 2000})
        this.route.navigate([`sistema/saidas/lista-saida`])
      })
      // this.limparForm();
    } else {
      Object.keys(this.formulario.controls).forEach(e => {
        const campo: any = this.formulario?.get(e);
        campo.markAsTouched();
        this._snackBar.open('Preencha todos os campos obrigatórios do formulário!', 'Fechar', {duration: 3000})
      })
    }
    console.log(this.formulario);
    console.log(this.formulario.value);
    //this.limparForm();
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

  parceladoChange(arg: string, arg2: string) {
    const parcelado: any = this.formulario.get(arg);
    if (parcelado.value) {
      this.formulario.get(arg2)?.reset({ value: null, disabled: false });
    } else {
      this.formulario?.get(arg2)?.setValue(1);
    }
  }

}
