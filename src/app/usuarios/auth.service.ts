import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginModel } from './login.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mensagem;
  userAuth : boolean = false;
  @Output() loginEmmiter : EventEmitter<boolean> = new EventEmitter();
  @Output() idUser : EventEmitter<any> = new EventEmitter();
  constructor(private http : HttpClient,  private route: Router) { }

  fazerLogin(loginUser : loginModel){
      this.http.post<any>("http://localhost:8080/api/user/login", loginUser).subscribe(idUser =>{
      this.userAuth = true;
      this.idUser.emit(idUser);
      this.loginEmmiter.emit(true);
      this.route.navigate(['/dashboard', idUser]);
    }, err=>{
    this.loginEmmiter.emit(false);
    this.mensagem = err.error.message;
    this.route.navigate(['/login', this.mensagem]);
    }
    );
  }
  logout(){
    this.loginEmmiter.emit(false);
    this.route.navigate(['/']);
  }
  Userlogged(){
    return this.userAuth;
  }
}
