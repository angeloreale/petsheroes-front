import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Array<any> = [];
  usuario: Array<any> = [];
  id = 1;
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.listarUsuarios();
    this.buscarusuario();
  }
  listarUsuarios(){
    this.usuariosService.listarUsuarios().subscribe(usuarios =>{
      this.usuarios = usuarios;
      console.log(usuarios);
    }, err =>{
      console.log("Erro ao listar");
    });
  }
  buscarusuario(){
    this.usuariosService.buscarUsuario(this.id).subscribe(usuario =>{
      this.usuario = usuario;
      console.log(usuario);
    }, err =>{
      console.log("Erro ao buscar");
    });
  }

}
