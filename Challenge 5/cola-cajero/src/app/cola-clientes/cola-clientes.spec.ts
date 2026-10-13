import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaClientes } from './cola-clientes';

describe('ColaClientes', () => {
  let component: ColaClientes;
  let fixture: ComponentFixture<ColaClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(ColaClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
