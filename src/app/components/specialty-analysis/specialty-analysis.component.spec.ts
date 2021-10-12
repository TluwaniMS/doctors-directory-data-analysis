import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyAnalysisComponent } from './specialty-analysis.component';

describe('SpecialtyAnalysisComponent', () => {
  let component: SpecialtyAnalysisComponent;
  let fixture: ComponentFixture<SpecialtyAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtyAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
