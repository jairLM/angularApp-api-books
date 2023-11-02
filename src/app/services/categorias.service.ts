import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url: any = 'http://localhost:8080/v1/libros'//recibira cualquier tipo de dato

  constructor(private http : HttpClient) { }

  obtenerCategora(){


    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa("edita"+":"+"edita123")
    });
    /* const httpOptions = {
      headers: new HttpHeaders({
        authorization: 'Basic ' + btoa('alfredo:alfredo123')
      })
    }; */


    return this.http.get(this.url, {headers:headers});
  }


}
