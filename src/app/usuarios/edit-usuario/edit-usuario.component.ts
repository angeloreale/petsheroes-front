import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';
import { UsuarioModel } from './../usuario.model';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  idUser;
  usuario: UsuarioModel = new UsuarioModel();
  mensagem;
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.idUser = +this.route.snapshot.paramMap.get('idUser');
    this.buscarusuario();
  }
  buscarusuario(){
    this.usuariosService.buscarUsuario(this.idUser).subscribe(usuario =>{
      this.usuario = usuario;
      console.log(usuario);
    }, err =>{
      console.log("Erro ao buscar");
    });
  }
  alterarUsuario(){
    this.usuariosService.alterarUsuario(this.idUser, this.usuario).subscribe(result =>{
      this.mensagem = "Cadastro alterado com sucesso!";
      this.router.navigate(['/dashboard/perfil/', result.idUser]);
    }, err => {
      console.log("erro ao editar cadastro");
      this.mensagem = "Falha ao alterar!";
    });
  }
  excluirCadastro(){
    this.usuariosService.excluirUsuario(this.idUser).subscribe(user =>{
      this.router.navigate(['/']);
    }, err =>{
      this.mensagem = "Falha ao excluir!";
    });
  }

}
