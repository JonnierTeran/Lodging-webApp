import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from '../models/Reserva';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-reservas-arrendatario',
  templateUrl: './reservas-arrendatario.component.html',
  styleUrls: ['./reservas-arrendatario.component.scss']
})
export class ReservasArrendatarioComponent implements OnInit {
    
  Usuario:string;
  Email:string;

  Reservas:any[]

  constructor(private  _Router:Router,
    private _DataService : DataService) {
      this.Usuario =''
      this.Email=''

      this.Reservas=[]
    

   }

  ngOnInit(): void {
    this.Usuario = sessionStorage.getItem('nombre')!;
    this.Email =  sessionStorage.getItem('Email')!;

    this._DataService.GetReservaArrendatario(this.Email)
    .subscribe(
      Resp => {
        this.Reservas = Resp;
        console.log(Resp);
      }, Err => console.log(Err))


  }
  
  Salir(){
    this._Router.navigate(["Login"])
    sessionStorage.clear()
  }
  Registrar(){
    this._Router.navigate(["Alojamiento"])
  }

}
