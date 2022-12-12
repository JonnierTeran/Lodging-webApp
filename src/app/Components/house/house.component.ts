import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  Email:string;
  

  constructor(private _Router: Router) { 
    this.Email = ""+sessionStorage.getItem('nombre')
  }

  ngOnInit(): void {
    console.log(this.Email)
    
  }
  Home(){
    this._Router.navigate(["Home"]);
    
  }

}
