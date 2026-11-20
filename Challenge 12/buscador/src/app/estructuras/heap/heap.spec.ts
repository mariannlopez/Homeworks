import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heap } from './heap';

describe('Heap', () => {
  let component: Heap;
  let fixture: ComponentFixture<Heap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heap],
    }).compileComponents();

    fixture = TestBed.createComponent(Heap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
