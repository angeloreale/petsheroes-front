import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { loginModel } from './../login.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
  userLogin : loginModel = new loginModel();
  mensagem;
  constructor(private authService : AuthService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.mensagem = this.route.snapshot.paramMap.get('mensagem');
  }
  fazerLogin(){
    this.authService.fazerLogin(this.userLogin);
    this.ngOnInit();
  }
}
