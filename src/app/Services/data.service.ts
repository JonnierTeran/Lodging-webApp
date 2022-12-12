import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this._http.get('https://room-serve.onrender.com/'+'api/'+'users/' + Email)
  }
/******************************************************************************************* */

public SetUser(Obj:User){
  this._http.post('https://room-serve.onrender.com/api/users', Obj)
  .subscribe(
    Response => {
      console.log(Response);
      
    }, Error =>{
      console.log(Error);
      
    }
  )
}
}
