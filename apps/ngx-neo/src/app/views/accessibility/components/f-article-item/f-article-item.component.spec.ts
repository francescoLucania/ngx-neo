import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FArticleItemComponent } from './f-article-item.component';

describe('FArticleItemComponent', () => {
  let component: FArticleItemComponent;
  let fixture: ComponentFixture<FArticleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FArticleItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FArticleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
