import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntTetePageArticlesComponent } from './ent-tete-page-articles.component';

describe('EntTetePageArticlesComponent', () => {
  let component: EntTetePageArticlesComponent;
  let fixture: ComponentFixture<EntTetePageArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntTetePageArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntTetePageArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
