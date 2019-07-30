import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { FormcadastroComponent } from './formcadastro/formcadastro.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormloginComponent } from './formlogin/formlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';

@NgModule({
  declarations: [
    UsuariosComponent,
    FormcadastroComponent,
    FormloginComponent,
    DashboardComponent,
    EditUsuarioComponent
  ],
  imports: [
CommonModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule
  ],
  exports:[
    UsuariosComponent,
    FormloginComponent
  ],
  providers:[
    UsuariosService
  ]
})
export class UsuariosModule { }
