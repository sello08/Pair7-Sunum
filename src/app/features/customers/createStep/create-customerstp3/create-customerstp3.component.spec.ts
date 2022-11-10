import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerstp3Component } from './create-customerstp3.component';

describe('CreateCustomerstp3Component', () => {
  let component: CreateCustomerstp3Component;
  let fixture: ComponentFixture<CreateCustomerstp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerstp3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomerstp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
