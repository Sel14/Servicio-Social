import { TestBed } from '@angular/core/testing';

import { UnidadesService } from './unidades.service';

describe('UnidadesServiceService', () => {
  let service: UnidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
