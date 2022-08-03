import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteCroquisComponent } from './asistente-croquis.component';

describe('AsistenteCroquisComponent', () => {
  let component: AsistenteCroquisComponent;
  let fixture: ComponentFixture<AsistenteCroquisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsistenteCroquisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenteCroquisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
