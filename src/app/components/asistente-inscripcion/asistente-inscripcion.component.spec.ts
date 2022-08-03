import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteInscripcionComponent } from './asistente-inscripcion.component';

describe('AsistenteInscripcionComponent', () => {
  let component: AsistenteInscripcionComponent;
  let fixture: ComponentFixture<AsistenteInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenteInscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
