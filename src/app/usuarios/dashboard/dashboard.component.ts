import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/pets/pets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  idUser;
  pets: Array<any> = [];
  mensagem;
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private petsService: PetsService) { }
  ngOnInit() {
    this.idUser = this.route.snapshot.paramMap.get('idUser');
    this.petsByUser();
  }
  petsByUser(){
    this.petsService.petsByUser(this.idUser).subscribe(pets =>{
      this.pets = pets;
      if (pets.length == 0){
        this.mensagem = "Nenhum anúncio";
      }
    }, err =>{
        this.mensagem = "Erro na consulta";
    })
  }
  deletarPet(idPet){
    this.petsService.deletarPet(idPet).subscribe(pet =>{
      this.petsByUser();
    }, err =>{
      console.log("Erro ao deletar");
    });
  }

}
