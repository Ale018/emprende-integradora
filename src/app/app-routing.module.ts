import { RegistroComponent } from './components/registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { LoginComponent } from './components/login/login.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { EmprendeComponent } from './components/emprende/emprende.component';
import { AsistenteInscripcionComponent } from './components/asistente-inscripcion/asistente-inscripcion.component';
import { AsistenteEvaluarComponent } from './components/asistente-evaluar/asistente-evaluar.component';
import { AsistenteAsistenciaComponent } from './components/asistente-asistencia/asistente-asistencia.component';
import { LateralAsistenteComponent } from './components/lateral-asistente/lateral-asistente.component';
import { AsistenteInscripcionDatosComponent } from './components/asistente-inscripcion-datos/asistente-inscripcion-datos.component';
import { AsistenteEventosComponent } from './components/asistente-eventos/asistente-eventos.component';
import { AsistenteConvocatoriaComponent } from './components/asistente-convocatoria/asistente-convocatoria.component';
import { AsistenteCroquisComponent  } from './components/asistente-croquis/asistente-croquis.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { CodigoQRComponent } from './components/codigo-qr/codigo-qr.component';


const routes: Routes = [
  //{path: '', component:AppComponent},
  {path: 'home', component:EmprendeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'administrador', component:AdministradorComponent},
  {path: 'participantes', component:ParticipantesComponent},
  {path: 'asistente', component:AsistentesComponent},
  {path: 'evaluar', component:AsistenteEvaluarComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'inscripcion', component:AsistenteInscripcionComponent},
  {path: 'asistencia', component:AsistenteAsistenciaComponent},
  {path: 'lateralAsistente', component:LateralAsistenteComponent},
  {path: 'inscripcionDatos', component:AsistenteInscripcionDatosComponent},
  {path: 'eventos', component:AsistenteEventosComponent},
  {path: 'convocatoria', component:AsistenteConvocatoriaComponent},
  {path: 'croquis', component:AsistenteCroquisComponent},
  {
    path: 'RegistroAsistenciaActividad/add',
    component: AsistenteAsistenciaComponent
  },
  {path: 'lateral', component: LateralComponent},
  {path: 'codigo', component: CodigoQRComponent}
 // {path: 'emprende', component:EmprendeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
