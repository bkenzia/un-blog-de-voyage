import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreAvisComponent } from './notre-avis.component';

describe('NotreAvisComponent', () => {
  let component: NotreAvisComponent;
  let fixture: ComponentFixture<NotreAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotreAvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotreAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
