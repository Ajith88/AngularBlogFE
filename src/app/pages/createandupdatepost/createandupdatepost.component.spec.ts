import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateandupdatepostComponent } from './createandupdatepost.component';

describe('CreateandupdatepostComponent', () => {
  let component: CreateandupdatepostComponent;
  let fixture: ComponentFixture<CreateandupdatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateandupdatepostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateandupdatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
