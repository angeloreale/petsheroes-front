import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets: Array<any> = [];

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.listarPets();
  }
  listarPets(){
    this.petsService.listarPets().subscribe(pets =>{
      this.pets = pets;
      console.log(pets);
    }, err=>{
      console.log("Erro ao listar pets")
    });
  }

}
