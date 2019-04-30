import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServicesComponent } from './card-services.component';

describe('CardServicesComponent', () => {
  let component: CardServicesComponent;
  let fixture: ComponentFixture<CardServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
