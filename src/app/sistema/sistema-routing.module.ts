import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { CategoriasComponent } from './cadastros/categorias/categorias.component';
import { ObrasComponent } from './cadastros/obras/obras.component';
import { EntradasComponent } from './entradas/entradas.component';
import { ListaEntradasComponent } from './entradas/lista-entradas/lista-entradas.component';
import { NovaEntradaComponent } from './entradas/nova-entrada/nova-entrada.component';
import { DetalhesSaidasComponent } from './saidas/detalhes-saidas/detalhes-saidas.component';
import { ListaSaidasComponent } from './saidas/lista-saidas/lista-saidas.component';
import { NovaSaidaComponent } from './saidas/nova-saida/nova-saida.component';
import { SaidasComponent } from './saidas/saidas.component';
import { SistemaComponent } from './sistema.component';

const routes: Routes = [
  {
    path: 'sistema', component: SistemaComponent, children: [
      {path: 'saidas', component: SaidasComponent, children: [
          {path: 'lista-saida', component: ListaSaidasComponent, children: [
            {path:'detalhes/:id', component: DetalhesSaidasComponent}    
          ]},
          {path: 'nova-saida', component: NovaSaidaComponent}
        ]
      },
      {path: 'cadastros', component: CadastrosComponent, children:[
        {path: 'categorias', component: CategoriasComponent},
        {path: 'obras', component: ObrasComponent}
      ]},
      {path: 'entradas', component: EntradasComponent, children:[
        {path: 'lista-entrada', component: ListaEntradasComponent},
        {path: 'nova-entrada', component: NovaEntradaComponent}
      ]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
