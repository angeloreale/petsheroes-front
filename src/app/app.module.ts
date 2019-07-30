import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PetsModule } from './pets/pets.module';
import { AuthService } from './usuarios/auth.service';
import { FormloginComponent } from './usuarios/formlogin/formlogin.component';
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { BotoesComponent } from './botoes/botoes.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MenuLogadoComponent,
    BotoesComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UsuariosModule,
    PetsModule
  ],
  providers: [
    AppRoutingModule,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
