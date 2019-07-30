import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetsService } from '../pets.service';
import { petModel } from '../pet.model';

@Component({
  selector: 'app-editar-pet',
  templateUrl: './editar-pet.component.html',
  styleUrls: ['./editar-pet.component.css']
})
export class EditarPetComponent implements OnInit {
  idPet;
  idUser;
  pet : petModel = new petModel();
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private petsService: PetsService) { }

  ngOnInit() {
    this.idPet = +this.route.snapshot.paramMap.get('idPet');
    this.dadosPet();
  }
  dadosPet(){
    this.petsService.dadosPet(this.idPet).subscribe(pet =>{
      this.pet = pet;
      this.idUser = pet.user.idUser;
      console.log(this.idUser);
    }, err =>{
      console.log("Não foi possivel localizar o cadastro");
    });
  }
  editarPet(){
    this.petsService.editarPet(this.idPet, this.pet).subscribe(result =>{
      this.router.navigate(['/dashboard/', result.idUser]);
    }, err=>{
      console.log("Erro ao editar")
    });
  }

}
