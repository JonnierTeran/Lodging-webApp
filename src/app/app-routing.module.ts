import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientosComponent } from './Components/alojamientos/alojamientos.component';
import { CreateComponent } from './Components/create/create.component';
import { HomeComponent } from './Components/home/home.component';
import { HouseComponent } from './Components/house/house.component';
import { LoginComponent } from './Components/login/login.component';
import { OfertarComponent } from './Components/ofertar/ofertar.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { ReservasArrendatarioComponent } from './Components/reservas-arrendatario/reservas-arrendatario.component';
import { ReservasEstudiantesComponent } from './Components/reservas-estudiantes/reservas-estudiantes.component';


const routes: Routes = [
  {path:"" , component: LoginComponent},
  {path:"Home" , component:HomeComponent},
  {path:"Login" , component:LoginComponent},
  {path:"Registrar" , component:RegistroComponent},
  {path:"House" , component:HouseComponent},
  {path:"Alojamiento" , component:AlojamientosComponent},
  {path:"create/:id" , component: CreateComponent},
  {path:"Ofertar" , component:OfertarComponent},
  {path:"ReservasArrendatario" , component:ReservasArrendatarioComponent},
  {path:"ReservasEstudiantes" , component:ReservasEstudiantesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
