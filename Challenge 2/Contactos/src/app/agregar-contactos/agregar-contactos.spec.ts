import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContactos } from './agregar-contactos';

describe('AgregarContactos', () => {
  let component: AgregarContactos;
  let fixture: ComponentFixture<AgregarContactos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarContactos],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarContactos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
