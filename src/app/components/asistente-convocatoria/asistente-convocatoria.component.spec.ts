import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteConvocatoriaComponent } from './asistente-convocatoria.component';

describe('AsistenteConvocatoriaComponent', () => {
  let component: AsistenteConvocatoriaComponent;
  let fixture: ComponentFixture<AsistenteConvocatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenteConvocatoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteConvocatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
