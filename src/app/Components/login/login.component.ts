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

  constructor(private _DataService: DataService,
    private _formBuilder: FormBuilder,
    private _Router: Router) {



    //Instancia del formulario
    this.LoginForm = this._formBuilder.group({
      // Datos encabezado
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }

  public ejecutar() {
    let Obj = this.LoginForm.value;
    console.log('ee');
    
    this._DataService.GetUser(Obj.user)
      .subscribe(
        e => {
          console.log(e);
        
  
          if (Obj.user == e[0].Email && Obj.password == e[0].password_2) {
            if(e[0].Rol === 'Estudiante') {
              console.log('confirmed  stutudent');
              sessionStorage.setItem('nombre', e[0].Nombre)
              sessionStorage.setItem('Email', e[0].Email)
              sessionStorage.setItem('Password', e[0].password_2)
              this._Router.navigate(["House"]);
              alert('Rol: Estuidante')
              alert('Credenciales correctas, Bienvenido')
            }
           if(e[0].Rol === 'Arrendatario') {
              console.log('confirmed  Arrednatario');
              sessionStorage.setItem('nombre', e[0].Nombre)
              sessionStorage.setItem('Email', e[0].Email)
              sessionStorage.setItem('Password', e[0].password_2)
              this._Router.navigate(["Ofertar"]);
              alert('Rol: Arrendatario');
              alert('Credenciales correctas, Bienvenido');

            }
          }


        },
        Err => {
          console.log(Err)
          alert('Ups, Error, intente nuevamente')
          alert('Error, Credenciales incorrectas, intente nuevamente')
        })

  }

  Registrar(){
    this._Router.navigate(["Registrar"])
  }

}
