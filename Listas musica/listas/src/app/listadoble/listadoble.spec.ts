import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listadoble } from './listadoble';

describe('Listadoble', () => {
  let component: Listadoble;
  let fixture: ComponentFixture<Listadoble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listadoble],
    }).compileComponents();

    fixture = TestBed.createComponent(Listadoble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
