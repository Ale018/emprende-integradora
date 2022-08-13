import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroAsistente } from '../models/RegistroAsistente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroAsistenteService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http:HttpClient) { }

  getRegistroAsistente(){
    return this.http.get(`${this.API_URI}/registroAsistente`);
  }
  saveRegistroAsistente(RegistroAsistente : RegistroAsistente){
    return this.http.post(`${this.API_URI}/registroAsistente`,RegistroAsistente);
  }
}
