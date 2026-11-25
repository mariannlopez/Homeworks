import { TestBed } from '@angular/core/testing';

import { Grafo } from './grafo';

describe('Grafo', () => {
  let service: Grafo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Grafo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
