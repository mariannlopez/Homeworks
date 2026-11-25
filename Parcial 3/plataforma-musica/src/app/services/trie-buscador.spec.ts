import { TestBed } from '@angular/core/testing';

import { TrieBuscador } from './trie-buscador';

describe('TrieBuscador', () => {
  let service: TrieBuscador;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrieBuscador);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
