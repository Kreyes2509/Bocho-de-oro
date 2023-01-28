import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private ruta:Router
  ) { }

  ngOnInit(): void {
  }

  miForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  login(){
    if(this.miForm.valid)
    {
      console.log(this.f['username'].value)
      if(this.f['username'].value == "homero")
      {
        this.ruta.navigate(['/dashAdmin'])
        localStorage.setItem("usuario","1");
      }
      else if(this.f['username'].value == "cartman")
      {
        this.ruta.navigate(['/dashEmpleado'])
        localStorage.setItem("usuario","2");
      }
      else if(this.f['username'].value == "butters")
      {
        this.ruta.navigate(['/dashCliente'])
        localStorage.setItem("usuario","3");
      }
      else
      {

      }
    }
  }


  get f(): { [key: string]: AbstractControl} {return this.miForm.controls; }

}
