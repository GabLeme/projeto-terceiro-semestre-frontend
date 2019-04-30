import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerProfileComponent } from './consumer-profile.component';

describe('ConsumerProfileComponent', () => {
  let component: ConsumerProfileComponent;
  let fixture: ComponentFixture<ConsumerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
