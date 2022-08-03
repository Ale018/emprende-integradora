import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteInscripcionDatosComponent } from './asistente-inscripcion-datos.component';

describe('AsistenteInscripcionDatosComponent', () => {
  let component: AsistenteInscripcionDatosComponent;
  let fixture: ComponentFixture<AsistenteInscripcionDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenteInscripcionDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteInscripcionDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
