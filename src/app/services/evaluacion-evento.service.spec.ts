import { TestBed } from '@angular/core/testing';

import { EvaluacionEventoService } from './evaluacion-evento.service';

describe('EvaluacionEventoService', () => {
  let service: EvaluacionEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluacionEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
