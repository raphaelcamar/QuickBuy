import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../modelo/ususario";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls:["./login.component.css"]
})
export class LoginComponent implements OnInit{
  public usuario;
  public returnUrl: string;


  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    
  }
    ngOnInit(): void {
      this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
      this.usuario = new Usuario();
    }

  entrar(): void {
    if (this.usuario.email == 'raphael@teste.com' && this.usuario.senha == 'abc123') {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl])
    }
  }


}
