import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorTrie } from './buscador-trie';

describe('BuscadorTrie', () => {
  let component: BuscadorTrie;
  let fixture: ComponentFixture<BuscadorTrie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorTrie],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorTrie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
