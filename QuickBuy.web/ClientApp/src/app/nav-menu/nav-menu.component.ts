import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LojaCarrinhoCompras } from '../loja/carrinho/loja.carrinho.compras';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit{
  isExpanded = false;
  public carrinhoCompas: LojaCarrinhoCompras;

  ngOnInit(): void {
    this.carrinhoCompas = new LojaCarrinhoCompras();
  }

  constructor(private router: Router, private usuarioServico: UsuarioServico ) {

  }
    
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public usuarioLogado(): boolean {

    return this.usuarioServico.usuario_autenticado();

  }
  public usuario_administrador(): boolean {
    let b = this.usuarioServico.usuario_administrador();
    return b;
  }

  sair() {
    this.usuarioServico.limpar_sessao();
    this.router.navigate(['/']);
  }

  get usuario() {
    return this.usuarioServico.usuario;
  }

  public temItensCarrinhoCompras() {
    return this.carrinhoCompas.temItensCarrinhoCompras();
  }
}
