import { TestBed } from '@angular/core/testing';

import { RegistroAsistenteService } from './registro-asistente.service';

describe('RegistroAsistenteService', () => {
  let service: RegistroAsistenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroAsistenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
