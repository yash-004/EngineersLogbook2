import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Device } from '@ionic-native/device/ngx';
import { CmdMapPage } from './CmdMap.page';

describe('CmdMapPage', () => {
  let component: CmdMapPage;
  let fixture: ComponentFixture<CmdMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
