import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalAnalysisComponent } from './hospital-analysis.component';

describe('HospitalAnalysisComponent', () => {
  let component: HospitalAnalysisComponent;
  let fixture: ComponentFixture<HospitalAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
