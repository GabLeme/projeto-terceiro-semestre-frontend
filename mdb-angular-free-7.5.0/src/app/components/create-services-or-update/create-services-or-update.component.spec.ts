import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateServicesOrUpdateComponent } from './create-services-or-update.component';

describe('CreateServicesOrUpdateComponent', () => {
  let component: CreateServicesOrUpdateComponent;
  let fixture: ComponentFixture<CreateServicesOrUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateServicesOrUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServicesOrUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
