import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
    constructor(){}
    getCategorias(){
        return [
            {id: 1, nome: "Geral"},
            {id: 2, nome: "Vale Tranporte"},
            {id: 3, nome: "Vale Refeição"},
            {id: 4, nome: "Impostos"},
            {id: 5, nome: "Taxas Bancárias"},
            {id: 6, nome: "Combustível"},
            {id: 8, nome: "Adiantamento"},
            {id: 7, nome: "Pagamento"}
        ]
    }
    
}