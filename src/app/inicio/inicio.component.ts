import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public nombre:String;
  constructor() { 
      this.nombre="Edson Sosa"
  }

  ngOnInit(): void {
  }

}
