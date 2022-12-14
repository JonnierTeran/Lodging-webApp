import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/Factura';
import { Habitacion } from 'src/app/models/Habitacion';
import { Modelodepago } from 'src/app/models/Modelodepago';
import { Reserva } from 'src/app/models/Reserva';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    
  Habitacion!:Habitacion;

  Usuario!:any;
  users_Email!:any

  Prec:number;

  ReservaForm: FormGroup;
  
  id:string;

  constructor(private _DataService : DataService,
    private _Route:ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _router:Router) { 

      this.Prec = 0
      this.id = ''

      //Instancia del formulario
    this.ReservaForm = this._formBuilder.group({
      // Datos encabezado
      FechaInicio: ['', Validators.required],
      FechaFin: ['', Validators.required],
      Hora: ['', Validators.required],
    })

  }

  ngOnInit(): void {
    let a = this._Route.snapshot.paramMap.get('id')
    let ide = +a!
    
    this.id = a!;
    console.log(typeof ide +" : "+ide);
    
    
    this._DataService.GetHabitacion(ide)
    .subscribe(
      Response => {
        this.Habitacion = Response[0]
        console.log(this.Habitacion)
      }
      ,
      Err => console.log(Err))

    this.Usuario = sessionStorage.getItem('nombre');
    this.users_Email =  sessionStorage.getItem('Email');

  }

  Precio(Dias:number){
    this.Prec = this.Habitacion.Precio * Dias;
  }

  Cancelar(){
    this._router.navigate(["Alojamiento"])
  }
  
  ejecutar(){
    let Obj = this.ReservaForm.value;

    let Reservas:Reserva = new Reserva(this.users_Email,this.id,Obj.FechaInicio, Obj.FechaFin);
    this._DataService.setReserva(Reservas);

    
    let Facturas:Factura = new Factura(this.users_Email,this.Habitacion.Nombre_Habitacion,this.Prec);
    this._DataService.setFactura(Facturas);
    
    setTimeout(() => {
      this._DataService.GetFacturas()
     .subscribe(
       Resp =>{
         let index = Resp.length 
         let Modelodepagos:Modelodepago = new Modelodepago(Resp[index-1].nitFac,Obj.FechaInicio,Obj.Hora, 'Reserva de Pension por Dias');
         this._DataService.setModeloPago(Modelodepagos);
         
         
       }, Err => console.log(Err))
      
    }, 2000);

    this.ReservaForm.reset()
    
    this.Prec = 0
    

  }
}
