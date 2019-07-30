import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetsService } from './../pets.service';
import { petModel } from '../pet.model';

@Component({
  selector: 'app-cadastro-pet',
  templateUrl: './cadastro-pet.component.html',
  styleUrls: ['./cadastro-pet.component.css']
})
export class CadastroPetComponent implements OnInit {
  pet : petModel = new petModel;
  erro;
  mensagem;
  private idUser;
  constructor(private router: Router, 
              private route: ActivatedRoute,
              private petsService: PetsService) { }

  ngOnInit() {
    this.idUser = +this.route.snapshot.paramMap.get('idUser');
    this.mensagem = this.route.snapshot.params.mensagem;
  }
  cadastrarPet(){
    this.petsService.cadastrarpet(this.idUser,this.pet).subscribe(pet =>{
      this.pet = new petModel();
      console.log("cadastrado com sucesso!");
      this.router.navigate(['/dashboard', this.idUser]);
    }, err =>{
      this.mensagem = err.error.message;
      this.router.navigate(['/cadastrar-pet', this.idUser, {mensagem:this.mensagem}]);
    }
    )}

}
