import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trie } from './trie';

describe('Trie', () => {
  let component: Trie;
  let fixture: ComponentFixture<Trie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trie],
    }).compileComponents();

    fixture = TestBed.createComponent(Trie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
