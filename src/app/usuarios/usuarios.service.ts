import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from './usuario.model';
import { loginModel } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http: HttpClient) { }

  listarUsuarios() : Observable<any>{
    return this.http.get("http://localhost:8080/api/user");
  }
  cadastrarUsuario(usuario: UsuarioModel) : Observable<any>{
    return this.http.post("http://localhost:8080/api/user", usuario);
  }
  buscarUsuario(id: number): Observable<any>{
    return this.http.get(`http://localhost:8080/api/user/${id}`);
  }
  alterarUsuario(idUser , usuario : UsuarioModel): Observable<any>{
    return this.http.put("http://localhost:8080/api/user/edit/"+idUser, usuario);
  }
  excluirUsuario(idUser): Observable<any>{
    return this.http.delete("http://localhost:8080/api/user/" + idUser);
  }
}
