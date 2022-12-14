export class  Factura{
    nitFactura?: string;
    users_Email:string;
    Descripcion:string;
    ValorTotal:number ;

    constructor(
        users_Email : string,
        Descripcion: string,
        ValorTotal : number){
        
            this.users_Email = users_Email;
            this.Descripcion = Descripcion;
            this.ValorTotal = ValorTotal;

    }
}