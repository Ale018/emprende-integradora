import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteAsistenciaComponent } from './asistente-asistencia.component';

describe('AsistenteAsistenciaComponent', () => {
  let component: AsistenteAsistenciaComponent;
  let fixture: ComponentFixture<AsistenteAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenteAsistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
