import { RegistroComponent } from './../registro/registro.component';
import { RegistroAsistenciaService } from './../../services/registro-asistencia.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    Id_RegistroAsistente: '',
    Id_Actividad: '',
    Estatus_Asistencia: '' 
  }
  edit:boolean =false;
  constructor(private registroAsistenciaService : RegistroAsistenciaService, private router:Router,private ActivatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    const params=this.ActivatedRoute.snapshot.params;
    if(params ['Id_RegistroAsistente']){
      this.registroAsistenciaService.getRegistroAsistencia().subscribe(
      res =>{
        console.log(res);
        this.RegistroAsistenciaActividad=res;
        this.edit=true;

      },
      err=>console.error(err)
      );
    }
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
  
  getAsistencia(){
    this.registroAsistenciaService.saveRegistroAsistencia( this.RegistroAsistenciaActividad).subscribe(
      resp=> {
        this.RegistroAsistenciaActividad =resp;
      },
      err=> console.error(err)
    );
  }
}
