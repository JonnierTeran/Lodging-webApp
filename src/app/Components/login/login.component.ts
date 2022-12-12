import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
  LoginForm: FormGroup;

  constructor(private _DataService:DataService, 
    private _formBuilder: FormBuilder,
    private _Router:Router) { 
    
    

    //Instancia del formulario
    this.LoginForm = this._formBuilder.group({
      // Datos encabezado
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }
  
  public ejecutar(){
    let Obj =  this.LoginForm.value;
  
    this._DataService.GetUser(Obj.user)
    .subscribe(
      e => {
        console.log(e);
        
        if(Obj.user == e[0].Email && Obj.password == e[0].password_2){
          console.log('confirmed');
          sessionStorage.setItem('nombre', e[0].Nombre)
          sessionStorage.setItem('Email', e[0].Email)
          sessionStorage.setItem('Password', e[0].password_2)
          this._Router.navigate(["House"]);
          
        }
     
    },
      Err => console.log(Err))
    

    
     
      
 
  }

}
