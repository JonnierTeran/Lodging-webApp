import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }
  
  Empezar(){
    this.Router.navigate(["Registrar"])
  }
  Red(){
    this.Router.navigate(["House"])
  }

  Redir(){
    this.Router.navigate(["Alojamiento"])
  }

}
