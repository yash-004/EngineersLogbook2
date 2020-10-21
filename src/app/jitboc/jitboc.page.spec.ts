import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { jitbocPage } from './jitboc.page';

describe('jitbocPage', () => {
  let component: jitbocPage;
  let fixture: ComponentFixture<jitbocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ jitbocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(jitbocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
