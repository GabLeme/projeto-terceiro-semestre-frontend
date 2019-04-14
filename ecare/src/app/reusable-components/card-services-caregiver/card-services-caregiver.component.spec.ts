import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServicesCaregiverComponent } from './card-services-caregiver.component';

describe('CardServicesCaregiverComponent', () => {
  let component: CardServicesCaregiverComponent;
  let fixture: ComponentFixture<CardServicesCaregiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardServicesCaregiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServicesCaregiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
