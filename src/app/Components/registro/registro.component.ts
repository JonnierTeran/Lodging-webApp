import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  
  RegistroForm: FormGroup;
  Obj!:User[];

  constructor(private _formBuilder: FormBuilder,
    private _DataService: DataService) { 
     this.Obj;

    this.RegistroForm = this._formBuilder.group({
      // Datos encabezado
      Nombre: ['', Validators.required],
      Nombre2: ['', Validators.required],
      Apellido: ['', Validators.required],
      Apellido2: ['', Validators.required],
      Email: ['', Validators.required],
      password_2: ['', Validators.required],
      Rol:['', Validators.required]
    })
  }

  

  ngOnInit(): void {
  }

  ejecutar(){
  let obj = this.RegistroForm.value
  
  
  console.log(obj);
  
  this._DataService.SetUser(obj)

  
  
  }

}
