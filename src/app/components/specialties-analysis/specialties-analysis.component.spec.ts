import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtiesAnalysisComponent } from './specialties-analysis.component';

describe('SpecialtiesAnalysisComponent', () => {
  let component: SpecialtiesAnalysisComponent;
  let fixture: ComponentFixture<SpecialtiesAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtiesAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtiesAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
