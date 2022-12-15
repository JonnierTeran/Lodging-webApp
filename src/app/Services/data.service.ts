import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../models/Factura';
import { Modelodepago } from '../models/Modelodepago';
import { Reserva } from '../models/Reserva';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    Url:string;


  constructor(private _http:HttpClient ) { 
    this.Url = 'https://room-serve.onrender.com/'
  }
/************************************************************************************** */
  public GetUser(Email:string):Observable<any>{
    return this._http.get('http://localhost:3000/api/users/' + Email)
  }
/******************************************************************************************* */

public SetUser(Obj:User){
  this._http.post('http://localhost:3000/api/users', Obj) //https://room-serve.onrender.com/api/users
  .subscribe(
    Response => {
      console.log(Response);
      
      
    }, Error =>{
      console.log(Error);
      alert("Usuario Registrado correctamente")
      
    }
  )
}


/******************************************************************************************* */
public setHabitacion(Obj:User){
  this._http.post('http://localhost:3000/api/habitacion', Obj) //https://room-serve.onrender.com/api/users
  .subscribe(
    Response => {
      console.log(Response);
      alert("Habitacion Registrada correctamente")
      
    }, Error =>{
      console.log(Error);
      alert("Habitacion Registrada correctamente")
      
      
    }
  )
}

/************************************************************************************** */
public GetAlojamientos():Observable<any>{
  return this._http.get('http://localhost:3000/api/habitaciones')
}
/******************************************************************************************* */

public GetHabitacion(id:number):Observable<any>{
  return this._http.get('http://localhost:3000/api/habitacion/' + id)
}

/******************************************************************************************* */
public setReserva(Obj:Reserva){
  this._http.post('http://localhost:3000/api/reserva', Obj) //https://room-serve.onrender.com/api/users
  .subscribe(
    Response => {
      console.log(Response);
      alert("Reserva Registrada correctamente")
      
    }, Error =>{
      console.log(Error);
      alert("Habitacion Reserva correctamente xd")
      
      
    }
  )
}

/******************************************************************************************* */
public setFactura(Obj:Factura){
  this._http.post('http://localhost:3000/api/factura', Obj) //https://room-serve.onrender.com/api/users
  .subscribe(
    Response => {
      console.log(Response);
      //alert("Factura Registrada correctamente")
      
    }, Error =>{
      console.log(Error);
      //alert("Habitacion Reserva correctamente xd")
      
      
    }
  )
}

/******************************************************************************************* */

public GetFacturas():Observable<any>{
  return this._http.get('http://localhost:3000/api/factura')
}

/******************************************************************************************* */
public setModeloPago(Obj:Modelodepago){
  this._http.post('http://localhost:3000/api/modelodepago', Obj) //https://room-serve.onrender.com/api/users
  .subscribe(
    Response => {
      console.log(Response);
      //alert("Factura Registrada correctamente")
      
    }, Error =>{
      console.log(Error);
      //alert("Habitacion Reserva correctamente xd")
      
      
    }
  )
}
/************************************************************************************** */
public GetReservaArrendatario(Email:string):Observable<any>{
  return this._http.get<any>('http://localhost:3000/api/Reserva/' + Email)
}

/************************************************************************************** */
public GetReservaArreEstudiante(Email:string):Observable<any>{
  return this._http.get<any>('http://localhost:3000/api/Reservae/' + Email)
}
}
