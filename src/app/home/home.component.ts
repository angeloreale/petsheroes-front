import { Component, OnInit } from '@angular/core';
import { FormloginComponent } from './../usuarios/formlogin/formlogin.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    HomeSingleton.init();
  }

}

const HomeSingleton = {
  init: function() {
    this.addListeners();
    this.loadStates();
  },
  addListeners: function() {
    document.querySelector(".home__c__w__form__estado__select").addEventListener("change", e => {
      this.loadCities(e.currentTarget.value);
    }) 
  },
  loadStates: function() {
    let states_el = document.querySelector(".home__c__w__form__estado__select");
    states_el.innerHTML = `<option value="" disabled selected>Estado</option>`;
    fetch(`${window.location.protocol}//${window.location.hostname}:3000/api/consulta/cidades`)
      .then(res => {
        return res.json()
      })
      .then(states => {
        states.forEach(st => {
          states_el.innerHTML += `<option value=${st.sigla}>${st.nome}</option>`
        })
      });
  },
  loadCities: function(state) {
    let cities_el = document.querySelector(".home__c__w__form__cidade__select")
    let cities_firstoption = document.querySelector(".home__c__w__form__cidade__select option");
    cities_el.disabled = true;
    cities_firstoption.innerHTML = "Carregando...";
    fetch(`${window.location.protocol}//${window.location.hostname}:3000/api/consulta/cidades/${state}`)
    .then(res => {
      return res.json()
    })
    .then(cities => {
      cities.forEach(ct => {
        cities_el.innerHTML += `<option value=${ct}>${ct}</option>`
      });
      cities_firstoption = document.querySelector(".home__c__w__form__cidade__select option");
      cities_firstoption.innerHTML = "Cidade";
      cities_el.disabled = false;
    });
  }
}
