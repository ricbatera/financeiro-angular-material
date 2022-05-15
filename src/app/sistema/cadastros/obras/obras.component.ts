import { Component, OnInit } from '@angular/core';
import { DatabaseServiceService } from 'src/app/services/database-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Obra } from 'src/app/model/Obra';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.component.html',
  styleUrls: ['./obras.component.css']
})
export class ObrasComponent implements OnInit {

  listaObras: Obra[] = [];
  displayedColumns = ['id', 'obra'];

  form: FormGroup = this.fb.group({
    obra:[null, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private db: DatabaseServiceService
  ) { }

  ngOnInit(): void {
    this.carregaObra();
  }

  carregaObra(){
    this.db.listarTodasObrasAtivas().subscribe(res=>{
      this.listaObras = res;
    })
  }

  salvar(){
    if(this.form.valid){      
      this.db.novaObra(this.form.value).subscribe(res=>{
        this.carregaObra();
        this.limparForm();
      }, error=>{
        console.log(error)
      })
    }else{
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
