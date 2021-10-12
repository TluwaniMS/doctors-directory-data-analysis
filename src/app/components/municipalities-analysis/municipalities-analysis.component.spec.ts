import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalitiesAnalysisComponent } from './municipalities-analysis.component';

describe('MunicipalitiesAnalysisComponent', () => {
  let component: MunicipalitiesAnalysisComponent;
  let fixture: ComponentFixture<MunicipalitiesAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalitiesAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalitiesAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
