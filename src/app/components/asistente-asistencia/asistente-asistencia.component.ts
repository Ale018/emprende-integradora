import { RegistroAsistenciaService } from './../../services/registro-asistencia.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute,Route } from '@angular/router';
import { RegistroAsistenciaActividad } from 'src/app/models/RegistroAsistenciaActividad';
import {Router} from  '@angular/router';

@Component({
  selector: 'app-asistente-asistencia',
  templateUrl: './asistente-asistencia.component.html',
  styleUrls: ['./asistente-asistencia.component.css']
})
export class AsistenteAsistenciaComponent implements OnInit {
  @HostBinding('class') classes = 'row'; 

  RegistroAsistenciaActividad: RegistroAsistenciaActividad={
    Id_RegistroAsistente: 0,
    Id_Actividad: 0,
    Estatus_Asistencia: '' 
  }
  constructor(private registroAsistenciaService : RegistroAsistenciaService, private router:Router,private activedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.saveNewAsistencia();
  }
  saveNewAsistencia(){
    this.registroAsistenciaService.saveRegistroAsistencia( this.RegistroAsistenciaActividad).subscribe(
      resp=>{
        console.log(resp);
        this.router.navigate(['/registroAsistencia']);
      },
      err=>console.error(err)
    );
    console.log(this.RegistroAsistenciaActividad)
  }
  getGames(){
    this.registroAsistenciaService.saveRegistroAsistencia( this.RegistroAsistenciaActividad).subscribe(
      resp=> {
        this.RegistroAsistenciaActividad =resp;
      },
      err=> console.error(err)
    );
  }
}
