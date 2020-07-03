import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComboComponent } from './chart-combo.component';

describe('ChartComboComponent', () => {
  let component: ChartComboComponent;
  let fixture: ComponentFixture<ChartComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
