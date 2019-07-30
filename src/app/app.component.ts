import { Component, Input } from '@angular/core';
import { FormloginComponent } from './usuarios/formlogin/formlogin.component';
import { AuthService } from './usuarios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petfront';
  @Input() logado: boolean;
  @Input() idUser;
  constructor(private auth: AuthService) { }
  ngOnInit() {
    this.auth.loginEmmiter.subscribe(
      login => this.logado = login
    );
    this.auth.idUser.subscribe(
      idUser=> this.idUser = idUser
    );
  }
  logout(){
    this.auth.logout();
  }
}
