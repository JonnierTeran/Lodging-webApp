export class Modelodepago{
    id?:string;
    Factura_nitFac: string;
    Fecha : string;
    Hora : string;
    Concepto: string;

    constructor(Factura_nitFac: string,
        Fecha : string,
        Hora : string,
        Concepto: string){
        this.Factura_nitFac= Factura_nitFac
        this.Fecha = Fecha;
        this.Hora = Hora;
        this.Concepto = Concepto

    }
}