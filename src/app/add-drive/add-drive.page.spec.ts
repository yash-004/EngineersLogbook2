import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDrivePage } from './add-drive.page';

describe('AddDrivePage', () => {
  let component: AddDrivePage;
  let fixture: ComponentFixture<AddDrivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDrivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
