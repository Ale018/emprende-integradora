import { EvaluacionEvento } from './../models/EvaluacionEvento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluacionEventoService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getEvaluacionEvento(){
    return this.http.get(`${this.API_URI}/evaluacionEvento`);
  }
  saveEvaluacionEvento( EvaluacionEvento : EvaluacionEvento){
    return this.http.post(`${this.API_URI}/evaluacionEvento`,EvaluacionEvento);
  }
}
