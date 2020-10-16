import { Component } from "@angular/core";
import { Usuario } from "../../modelo/ususario";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent {
  public usuario;
    usuarioAutenticado: boolean;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar(): void {
    if (this.usuario.email == 'raphael@teste.com' && this.usuario.senha == 'abc123') {
      this.usuarioAutenticado = true;
    }
  }


}
