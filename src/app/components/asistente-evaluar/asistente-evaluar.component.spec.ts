import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteEvaluarComponent } from './asistente-evaluar.component';

describe('AsistenteEvaluarComponent', () => {
  let component: AsistenteEvaluarComponent;
  let fixture: ComponentFixture<AsistenteEvaluarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenteEvaluarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteEvaluarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
