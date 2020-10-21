import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { jitmtracPage } from './jitmtrac.page';

describe('jitmtracPage', () => {
  let component: jitmtracPage;
  let fixture: ComponentFixture<jitmtracPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ jitmtracPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(jitmtracPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
