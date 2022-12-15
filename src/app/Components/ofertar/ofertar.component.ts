import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-ofertar',
  templateUrl: './ofertar.component.html',
  styleUrls: ['./ofertar.component.scss']
})
export class OfertarComponent implements OnInit {
  OfertaForm: FormGroup;
  Valid:boolean;
  
  constructor(private _Router:Router, private _DataService: DataService,
    private _formBuilder: FormBuilder,
    ) {
  
      this.Valid = true
  //Instancia del formulario
  this.OfertaForm = this._formBuilder.group({
    // Datos encabezado
    Nombre_Habitacion: ['', Validators.required],
    EstadoHabi: ['', Validators.required],
    Descripcion: ['', Validators.required],
    Precio: ['', Validators.required],
    Ciudad: ['', Validators.required],
    Departamento: ['', Validators.required],
    Direccion: ['', Validators.required],
    Imagen: ['']
  })

     }

  ngOnInit(): void {
  }
  

  Red(){
    this._Router.navigate(["Login"])
  }

  ejecutar(){
    console.log('Ok');
    
    let Obj = this.OfertaForm.value;
    console.log(Obj);
    
    this._DataService.setHabitacion(Obj)
    
    
    this.OfertaForm.reset();

    this._Router.navigate(["ReservasArrendatario"])
  }

  Confirm(){
    this.Valid = false;
  }

  Confirma(){
    this._Router.navigate(["ReservasArrendatario"]);
  }
}
