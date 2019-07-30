import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-logado',
  templateUrl: './menu-logado.component.html',
  styleUrls: ['./menu-logado.component.css']
})
export class MenuLogadoComponent implements OnInit {
  @Input() idUser;
  constructor() { }

  ngOnInit() {

  }

}
