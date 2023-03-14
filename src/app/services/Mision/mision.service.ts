import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

import { MisionDet, MisionEnc } from 'src/app/models/Mision';

@Injectable({
  providedIn: 'root'
})
export class MisionService {

  public misionEnc: MisionEnc[] = [];
  public misionDet: MisionDet[] = [];

  constructor(public http:HttpClient) { }

  getAllMisionEnc(){
    //let url = environment.api+"MisionEnc/GetAll";
    //return this.http.get<any[]>(url);
  }


}


