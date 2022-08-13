import { EvaluacionEventoService } from './../../services/evaluacion-evento.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluacionEvento } from 'src/app/models/EvaluacionEvento';

@Component({
  selector: 'app-asistente-evaluar',
  templateUrl: './asistente-evaluar.component.html',
  styleUrls: ['./asistente-evaluar.component.css']
})
export class AsistenteEvaluarComponent implements OnInit {
  @HostBinding('class') classes= 'row';

  EvaluacionEvento : EvaluacionEvento={
    Id_RegistroAsistente: '',
    Comentarios_Evento: ''
  }
  edit: boolean =false;
  constructor(private evaluacionEventoService : EvaluacionEventoService, private router: Router, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params=this.ActivatedRoute.snapshot.params;
    if(params ['Id_RegistroAsistente']){
      this.evaluacionEventoService.getEvaluacionEvento().subscribe(
        res=>{
          console.log(res);
          this.EvaluacionEvento=res;
          this.edit=true;
        },
        err=>console.error(err)
      );
    }
  }
  saveNewEvaluacionEvento(){
    this.evaluacionEventoService.saveEvaluacionEvento( this.EvaluacionEvento ).subscribe(
      resp=>{
        console.log(resp);
        this.router.navigate(['/evaluacionEvento']);
      },
      err=>console.error(err)
    );
    console.log(this.EvaluacionEvento)
  }
  getAsistente(){
    this.evaluacionEventoService.saveEvaluacionEvento( this.EvaluacionEvento ).subscribe(
      resp=>{
        this.EvaluacionEvento = resp;
      },
      err=> console.error(err)
    );
  }

}
