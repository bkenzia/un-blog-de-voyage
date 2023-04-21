import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagerPlusComponent } from './voyager-plus.component';

describe('VoyagerPlusComponent', () => {
  let component: VoyagerPlusComponent;
  let fixture: ComponentFixture<VoyagerPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyagerPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyagerPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
