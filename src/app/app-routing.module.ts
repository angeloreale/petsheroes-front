import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FormcadastroComponent } from './usuarios/formcadastro/formcadastro.component';
import { FormloginComponent } from './usuarios/formlogin/formlogin.component';
import { DashboardComponent } from './usuarios/dashboard/dashboard.component';
import { CadastroPetComponent } from './pets/cadastro-pet/cadastro-pet.component';
import { EditarPetComponent } from './pets/editar-pet/editar-pet.component';
import { EditUsuarioComponent } from './usuarios/edit-usuario/edit-usuario.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'cadastro',
    component: FormcadastroComponent
  },
  {
    path: 'login',
    component: FormloginComponent
  },
  {
    path: 'login/:mensagem',
    component: FormloginComponent
  },
  {
    path: 'dashboard/:idUser',
    component: DashboardComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'cadastrar-pet/:idUser',
    component: CadastroPetComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'editar-pet/:idPet',
    component: EditarPetComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'dashboard/perfil/:idUser',
    component: EditUsuarioComponent,
    canActivate: [UserGuard]
  },
  {
    path: '**',
    component: HomeComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
