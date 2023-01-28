import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automoviles',
  templateUrl: './automoviles.component.html',
  styleUrls: ['./automoviles.component.scss']
})
export class AutomovilesComponent implements OnInit {

  valor!:Number

  constructor() { }

  ngOnInit(): void {

    if(localStorage.getItem('usuario') == "1")
    {
      this.valor = 1
    }
    if(localStorage.getItem('usuario') == "2")
    {
      this.valor = 2
    }

  }

}
