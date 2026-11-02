import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyLuckySpinComponent } from './monthly-lucky-spin.component';

describe('MonthlyLuckySpinComponent', () => {
  let component: MonthlyLuckySpinComponent;
  let fixture: ComponentFixture<MonthlyLuckySpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyLuckySpinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyLuckySpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
