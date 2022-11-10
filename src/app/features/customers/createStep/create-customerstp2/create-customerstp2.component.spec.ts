import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerstp2Component } from './create-customerstp2.component';

describe('CreateCustomerstp2Component', () => {
  let component: CreateCustomerstp2Component;
  let fixture: ComponentFixture<CreateCustomerstp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomerstp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomerstp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
