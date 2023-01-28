import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

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
