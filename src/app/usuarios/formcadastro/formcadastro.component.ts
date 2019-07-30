import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-formcadastro',
  templateUrl: './formcadastro.component.html',
  styleUrls: ['./formcadastro.component.css']
})
export class FormcadastroComponent implements OnInit {

  constructor(private usuariosService : UsuariosService, private route: Router, private router: ActivatedRoute ) { }
  usuario: UsuarioModel = new UsuarioModel();
  mensagem
  ngOnInit() {
    this.mensagem = this.router.snapshot.params.mensagem;
  }
  cadastrarUsuario(){
    this.usuariosService.cadastrarUsuario(this.usuario).subscribe(usuario =>{
      this.route.navigate(['/login']);
    }, err =>{
      this.mensagem = err.error.message;
      this.route.navigate(['/cadastro', {mensagem:this.mensagem}]);
    });
    
  }
}
