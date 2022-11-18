import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AsignaturaInterface } from 'src/app/interfaces/asignatura-interface';
import { ResponseInterface } from 'src/app/interfaces/response-interface';


@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private http:HttpClient) { }

  getAsignatura(){
    let url = "http://localhost:8080/v1/asignatura";
    return this.http.get(url);
  }

  postAsignatura(asignatura: AsignaturaInterface):Observable<ResponseInterface>{
    console.log(asignatura)
    let url = "http://localhost:8080/v1/asignatura";
    return this.http.post<ResponseInterface>(url, asignatura)
  }

}
