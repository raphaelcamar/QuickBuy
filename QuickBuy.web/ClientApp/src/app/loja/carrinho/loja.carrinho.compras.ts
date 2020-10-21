import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {


  public produtos: Produto[] = [];

  public adicionar(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if (!produtoLocalStorage) {

      //senao existir nada dentro do local storage
      this.produtos.push(produto);
      localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    } else {
      //caso exista, pega os itens dentro do local, e adiciona mais
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos.push(produto);
    }
    localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if(produtoLocalStorage){
      return JSON.parse(produtoLocalStorage);
    }
  }

  public removerProduto(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if (produtoLocalStorage) {
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos = this.produtos.filter(p => p.id != produto.id)
      localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    }
    
  }

  atualizar(produtos: Produto[]) {
    localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
  }
}
