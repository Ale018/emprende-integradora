import { RegistroAsistenteService } from './../../services/registro-asistente.service';
import { RegistroAsistente } from './../../models/RegistroAsistente';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asistente-inscripcion-datos',
  templateUrl: './asistente-inscripcion-datos.component.html',
  styleUrls: ['./asistente-inscripcion-datos.component.css']
})
export class AsistenteInscripcionDatosComponent implements OnInit {
  @HostBinding('class') classes= 'row';

  RegistroAsistente: RegistroAsistente={
    Id_RegistroAsistente: 0,
    Nombre_Asistente: '',
    Ap_Paterno: '',
    Ap_Materno: '',
    Correo_Asistente: '',
    Campus_Asistente: '',
    Programa_Educativo: '',
    Id_Grupo: '',
    Id_Carrera: '',
    Tel_Asistente: '',
    Codigo_Acceso: '',
    Comentarios_Evento: ''
  }
  edit: boolean =false;
  constructor(private registroAsistenteService : RegistroAsistenteService, private router: Router, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.ActivatedRoute.snapshot.params;
    if(params ['Id_RegistroAsistente']){
      this.registroAsistenteService.getRegistroAsistente().subscribe(
        res=>{
          console.log(res);
          this.RegistroAsistente=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }
  saveNewAsistente(){
    this.registroAsistenteService.saveRegistroAsistente( this.RegistroAsistente ).subscribe(
      resp=>{
        console.log(resp);
        this.router.navigate(['/registroAsistente']);
      },
      err=>console.error(err)
    );
    console.log(this.RegistroAsistente)
  }
  getAsistente(){
    this.registroAsistenteService.saveRegistroAsistente( this.RegistroAsistente ).subscribe(
      resp=>{
        this.RegistroAsistente = resp;
      },
      err=> console.error(err)
    );
  }

}
