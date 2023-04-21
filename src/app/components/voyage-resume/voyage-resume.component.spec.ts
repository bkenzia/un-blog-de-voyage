import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageResumeComponent } from './voyage-resume.component';

describe('VoyageResumeComponent', () => {
  let component: VoyageResumeComponent;
  let fixture: ComponentFixture<VoyageResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
