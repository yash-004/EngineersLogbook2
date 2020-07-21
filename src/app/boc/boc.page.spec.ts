import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { bocPage } from './boc.page';

describe('bocPage', () => {
  let component: bocPage;
  let fixture: ComponentFixture<bocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ bocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(bocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
