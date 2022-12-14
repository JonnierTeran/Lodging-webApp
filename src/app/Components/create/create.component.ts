import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habitacion } from 'src/app/models/Habitacion';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    
  Habitacion!:Habitacion;

  Usuario!:any;
  Email!:any

  Prec:number;

  constructor(private _DataService : DataService,
    private _Route:ActivatedRoute,
    private _router:Router) { 

      this.Prec = 0

  }

  ngOnInit(): void {
    let a = this._Route.snapshot.paramMap.get('id')
    let id = +a!
    
    this._DataService.GetHabitacion(id)
    .subscribe(
      Response => {
        this.Habitacion = Response
        console.log(this.Habitacion.Nombre_Habitacion)
      }
      ,
      Err => console.log(Err))

    this.Usuario = sessionStorage.getItem('nombre');
    this.Email =  sessionStorage.getItem('Email');

  }

  Precio(Dias:number){
    this.Prec = Dias * 20000;
  }

  Cancelar(){
    this._router.navigate(["Alojamiento"])
  }

}
