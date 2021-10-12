import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalsAnalysisComponent } from './hospitals-analysis.component';

describe('HospitalsAnalysisComponent', () => {
  let component: HospitalsAnalysisComponent;
  let fixture: ComponentFixture<HospitalsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalsAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
