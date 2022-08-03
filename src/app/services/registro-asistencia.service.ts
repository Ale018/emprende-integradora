import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroAsistenciaActividad } from '../models/RegistroAsistenciaActividad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistroAsistenciaService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getRegistroAsistencia(){
    return this.http.get(`${this.API_URI}/registroAsistencia`);
  }
  saveRegistroAsistencia(RegistroAsistenciaActividad : RegistroAsistenciaActividad){
    return this.http.post(`${this.API_URI}/registroAsistencia`,RegistroAsistenciaActividad);
  }
}
