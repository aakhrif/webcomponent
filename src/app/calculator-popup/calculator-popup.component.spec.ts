import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorPopupComponent } from './calculator-popup.component';

describe('CalculatorPopupComponent', () => {
  let component: CalculatorPopupComponent;
  let fixture: ComponentFixture<CalculatorPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
