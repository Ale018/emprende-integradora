import { RegistroAsistenteService } from './services/registro-asistente.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegistroAsistenciaService } from './services/registro-asistencia.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ParticipantesComponent } from './components/participantes/participantes.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { LoginComponent } from './components/login/login.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { EmprendeComponent } from './components/emprende/emprende.component';
import { AsistenteConvocatoriaComponent } from './components/asistente-convocatoria/asistente-convocatoria.component';
import { AsistenteEventosComponent } from './components/asistente-eventos/asistente-eventos.component';
import { AsistenteInscripcionComponent } from './components/asistente-inscripcion/asistente-inscripcion.component';
import { AsistenteInscripcionDatosComponent } from './components/asistente-inscripcion-datos/asistente-inscripcion-datos.component';
import { LateralAdministradorComponent } from './components/lateral-administrador/lateral-administrador.component';
import { LateralAsistenteComponent } from './components/lateral-asistente/lateral-asistente.component';
import { LateralEvaluadorComponent } from './components/lateral-evaluador/lateral-evaluador.component';
import { LateralParticipanteComponent } from './components/lateral-participante/lateral-participante.component';
import { AsistenteAsistenciaComponent } from './components/asistente-asistencia/asistente-asistencia.component';
import { AsistenteEvaluarComponent } from './components/asistente-evaluar/asistente-evaluar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ParticipantesComponent,
    AsistentesComponent,
    LoginComponent,
    NavegacionComponent,
    PiePaginaComponent,
    RegistroComponent,
    LateralComponent,
    EmprendeComponent,
    AsistenteConvocatoriaComponent,
    AsistenteEventosComponent,
    AsistenteInscripcionComponent,
    AsistenteInscripcionDatosComponent,
    LateralAdministradorComponent,
    LateralAsistenteComponent,
    LateralEvaluadorComponent,
    LateralParticipanteComponent,
    AsistenteAsistenciaComponent,
    AsistenteEvaluarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RegistroAsistenciaService,
    RegistroAsistenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
