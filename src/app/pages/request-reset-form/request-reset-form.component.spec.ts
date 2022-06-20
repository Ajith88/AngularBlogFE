import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResetFormComponent } from './request-reset-form.component';

describe('RequestResetFormComponent', () => {
  let component: RequestResetFormComponent;
  let fixture: ComponentFixture<RequestResetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestResetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestResetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
