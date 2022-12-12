import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    Url:string;


  constructor(private _http:HttpClient ) { 
    this.Url = 'https://room-serve.onrender.com/'
  }

  public GetUser():Observable<any>{
    return this._http.get(this.Url+'api/'+'users')
  }
}
