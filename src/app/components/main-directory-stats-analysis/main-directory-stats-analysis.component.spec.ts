import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDirectoryStatsAnalysisComponent } from './main-directory-stats-analysis.component';

describe('MainDirectoryStatsAnalysisComponent', () => {
  let component: MainDirectoryStatsAnalysisComponent;
  let fixture: ComponentFixture<MainDirectoryStatsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDirectoryStatsAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDirectoryStatsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
