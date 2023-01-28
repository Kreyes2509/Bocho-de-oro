import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

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
