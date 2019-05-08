import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitiesDivComponent } from './utilities-div.component';

describe('UtilitiesDivComponent', () => {
  let component: UtilitiesDivComponent;
  let fixture: ComponentFixture<UtilitiesDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilitiesDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitiesDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
