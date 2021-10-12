import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalityAnalysisComponent } from './municipality-analysis.component';

describe('MunicipalityAnalysisComponent', () => {
  let component: MunicipalityAnalysisComponent;
  let fixture: ComponentFixture<MunicipalityAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalityAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalityAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
