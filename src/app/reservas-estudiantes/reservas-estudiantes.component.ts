import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-reservas-estudiantes',
  templateUrl: './reservas-estudiantes.component.html',
  styleUrls: ['./reservas-estudiantes.component.scss']
})
export class ReservasEstudiantesComponent implements OnInit {
   
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

    this._DataService.GetReservaArreEstudiante(this.Email)
    .subscribe(
      Resp => {
        this.Reservas = Resp;
        console.log(Resp);
      }, Err => console.log(Err))

  }
 
  Registrar(){
    this._Router.navigate(["Alojamiento"])
  }

}
