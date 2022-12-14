export class  Reserva{
    idReserva?:string;
    users_Email:string;
    habitacion_idHabitacion:string;
    FechaInicio:string;
    FechaFin:string;

    constructor(users_Email:string,
    habitacion_idHabitacion:string,
    FechaInicio:string,
    FechaFin:string){
        this.users_Email = users_Email;
        this.habitacion_idHabitacion = habitacion_idHabitacion;
        this.FechaInicio = FechaInicio;
        this.FechaFin = FechaFin;
    }
}