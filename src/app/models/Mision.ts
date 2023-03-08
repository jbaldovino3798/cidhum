export class MisionEnc{
    idMisionEnc: number = 0;
    fechaCreacion: string = "";    
    fechaActualizacion: string = "";
    estado: number = 0

    constructor(idMisionEnc:number, fechaCreacion: string, fechaActualizacion: string, estado: number){}
}

export class MisionDet{
    idMisionEnc: number = 0;
    idMisionDet: number = 0;
    descripcion: string = "";

    constructor(idMisionEnc:number, idMisionDet: number, descripcion: string){}
}