import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuelPage } from './add-fuel.page';

describe('AddFuelPage', () => {
  let component: AddFuelPage;
  let fixture: ComponentFixture<AddFuelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
