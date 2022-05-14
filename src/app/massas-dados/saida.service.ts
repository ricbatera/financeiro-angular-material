import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaidaService {
  gerarSaidas(qtde: number) {
    let result = [];
    for (let i = 0; i < qtde; i++) {
      result.push({
        id: i,
        descricao: `Descrição da conta criada ${i}`,
        dataVencimento: "16/04/2022",
        status: "Atrasado",
        valor: "R$ 980.384,25",
        categoria: "Vale Transporte"
      })
    }
    return result;
  }

  constructor() { }
}