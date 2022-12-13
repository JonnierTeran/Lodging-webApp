import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.scss']
})
export class AlojamientosComponent implements OnInit {
  Email:string

  Habitaciones:any[]


  constructor(private _Router:Router,
    private _DataService:DataService)
  { 
    this.Email = ""+sessionStorage.getItem('nombre')
    this.Habitaciones=[]
  }

  ngOnInit(): void {
    this._DataService.GetAlojamientos()
    .subscribe(
      Resp => {
        this.Habitaciones = Resp
          console.log(this.Habitaciones);
          
      }, Error => console.log(Error))
  }
  Home(){
    this._Router.navigate(["Home"]);
    
  }
  Redir(){
    this._Router.navigate(["Alojamiento"])
  }

  Redire(){
    this._Router.navigate(["House"])
  }
}
