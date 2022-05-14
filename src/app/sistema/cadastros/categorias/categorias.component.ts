import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseServiceService } from 'src/app/services/database-service.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  form: FormGroup = this.fb.group({
    categoria:[null, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private db: DatabaseServiceService) { }

  ngOnInit(): void {
  }

  salvar(){
    if(this.form.valid){
      console.log("Tudo ok :)");
      console.log(this.form.value);
      
      this.db.novaCategoria(this.form.value).subscribe(res=>{
        console.log(res)
      }, error=>{
        console.log(error)
      })
    }else{
      Object.keys(this.form.controls).forEach(e=>{
        const campo: any = this.form.get(e);
        campo.markAsTouched();
      })
           
    }
    console.log(this.form);
  }

  validaCampo(args: string){
    const c: any = this.form.get(args);
    if(c.touched){
      return c.valid;
    }
    return true;
  }

}
