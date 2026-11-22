import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorGif } from './buscador-gif';

describe('BuscadorGif', () => {
  let component: BuscadorGif;
  let fixture: ComponentFixture<BuscadorGif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorGif],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscadorGif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
