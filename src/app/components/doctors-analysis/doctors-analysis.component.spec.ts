import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsAnalysisComponent } from './doctors-analysis.component';

describe('DoctorsAnalysisComponent', () => {
  let component: DoctorsAnalysisComponent;
  let fixture: ComponentFixture<DoctorsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
