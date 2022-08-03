import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteEventosComponent } from './asistente-eventos.component';

describe('AsistenteEventosComponent', () => {
  let component: AsistenteEventosComponent;
  let fixture: ComponentFixture<AsistenteEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenteEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
