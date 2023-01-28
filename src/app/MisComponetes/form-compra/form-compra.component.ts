import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.scss']
})
export class FormCompraComponent implements OnInit {

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
