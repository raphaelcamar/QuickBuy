import { Component } from '@angular/core';

@Component({
  selector: "app-produto",
  template: "<html><body>{{obterNome()}} </body></html>",

})
export class ProdutoComponent {

  public nome: string;
  public liberadoParaVenda: boolean;

  public obterNome(): string {
    return this.nome;
  }
}
