import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRanking } from './panel-ranking';

describe('PanelRanking', () => {
  let component: PanelRanking;
  let fixture: ComponentFixture<PanelRanking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelRanking],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelRanking);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
