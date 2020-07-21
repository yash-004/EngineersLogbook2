import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mtracPage } from './mtrac.page';

describe('mtracPage', () => {
  let component: mtracPage;
  let fixture: ComponentFixture<mtracPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mtracPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mtracPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
