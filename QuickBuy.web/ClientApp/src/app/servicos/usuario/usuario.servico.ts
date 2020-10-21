import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../modelo/ususario';


@Injectable({
  providedIn : "root"
})
export class UsuarioServico {

  private baseUrl: string;
  private _usuario: Usuario;

  get usuario(): Usuario {
    let usuario_json = sessionStorage.getItem("usuario-autenticado");
    this._usuario = JSON.parse(usuario_json);
    return this._usuario;
  }

  set usuario(usuario : Usuario) {
    sessionStorage.setItem("usuario-autenticado", JSON.stringify(usuario));
    this._usuario = usuario
  }

  public usuario_autenticado(): boolean {
    console.log(this._usuario != null && this._usuario.email != "" && this._usuario.senha != "");
    return this._usuario != null && this._usuario.email != "" && this._usuario.senha != "";
  }

  public usuario_administrador(): boolean {
    let v =  this.usuario_autenticado() && this.usuario.ehAdministrador;
    
    return v;
  }

  public limpar_sessao() {
    sessionStorage.setItem("usuario-autenticado", "");
    this._usuario = null;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json');
  }

  constructor(private http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public verificarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      email: usuario.email,
      senha: usuario.senha
    }

    //this.baseURL = raiz do site
    return this.http.post<Usuario>(this.baseUrl + "api/usuario/verificarUsuario", body, { headers });
  }

  public cadastrarUsuario(usuario: Usuario): Observable<Usuario>{

    return this.http.post<Usuario>(this.baseUrl + "api/usuario", JSON.stringify(usuario), { headers: this.headers });
  }
}

