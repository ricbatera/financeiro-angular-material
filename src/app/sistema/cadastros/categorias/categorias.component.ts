import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoria } from 'src/app/model/categoria';
import { DatabaseServiceService } from 'src/app/services/database-service.service';



@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listaCategorias: categoria[] = [];
  displayedColumns = ['id', 'categoria'];
  // listaCategorias?: Observable<categoria[]>

  form: FormGroup = this.fb.group({
    categoria:[null, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private db: DatabaseServiceService
    ) { }

  ngOnInit(): void {
    // this.listaCategorias = this.db.listarCategorias();
    this.carregaCategorias();
  }

 
  carregaCategorias(){
    this.db.listarCategorias().subscribe(res=>{
      this.listaCategorias = res;
    })
  }

  salvar(){
    if(this.form.valid){      
      this.db.novaCategoria(this.form.value).subscribe(res=>{
        this.carregaCategorias();
        this.limparForm();
      }, error=>{
        console.log(error)
      })
    }else{
      console.log('chegou aqui')
      Object.keys(this.form.controls).forEach(e=>{
        const campo: any = this.form.get(e);
        campo.markAsTouched();
      })           
    }
  }

  validaCampo(args: string){
    const c: any = this.form.get(args);
    if(c.touched){
      return c.valid;
    }
    return true;
  }

  limparForm() {
    this.form.reset();
  }

}
