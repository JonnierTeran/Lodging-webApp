import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { CreateComponent } from './Components/create/create.component';
import { OfertarComponent } from './Components/ofertar/ofertar.component';
import { HouseComponent } from './Components/house/house.component';
import { AlojamientosComponent } from './Components/alojamientos/alojamientos.component';
import { InicioSesionComponent } from './Components/inicio-sesion/inicio-sesion.component';

import { DataService } from './Services/data.service'

import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ReservasArrendatarioComponent } from './reservas-arrendatario/reservas-arrendatario.component';
import { ReservasEstudiantesComponent } from './reservas-estudiantes/reservas-estudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    CreateComponent,
    OfertarComponent,
    HouseComponent,
    AlojamientosComponent,
    InicioSesionComponent,
    ReservasArrendatarioComponent,
    ReservasEstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
