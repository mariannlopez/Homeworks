import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listaenlazada } from './listaenlazada';

describe('Listaenlazada', () => {
  let component: Listaenlazada;
  let fixture: ComponentFixture<Listaenlazada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listaenlazada],
    }).compileComponents();

    fixture = TestBed.createComponent(Listaenlazada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
