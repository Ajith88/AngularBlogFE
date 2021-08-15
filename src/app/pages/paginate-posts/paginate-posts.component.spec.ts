import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatePostsComponent } from './paginate-posts.component';

describe('PaginatePostsComponent', () => {
  let component: PaginatePostsComponent;
  let fixture: ComponentFixture<PaginatePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatePostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
