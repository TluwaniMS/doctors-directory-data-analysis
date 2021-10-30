import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLandingPageComponent } from './project-landing-page.component';

describe('ProjectLandingPageComponent', () => {
  let component: ProjectLandingPageComponent;
  let fixture: ComponentFixture<ProjectLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectLandingPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
