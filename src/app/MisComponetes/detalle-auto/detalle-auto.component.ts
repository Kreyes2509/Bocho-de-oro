import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-auto',
  templateUrl: './detalle-auto.component.html',
  styleUrls: ['./detalle-auto.component.scss']
})
export class DetalleAutoComponent implements OnInit {

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
