import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContactos } from './eliminar-contactos';

describe('EliminarContactos', () => {
  let component: EliminarContactos;
  let fixture: ComponentFixture<EliminarContactos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarContactos],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarContactos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
