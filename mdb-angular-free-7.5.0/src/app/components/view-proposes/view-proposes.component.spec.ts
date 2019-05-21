import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProposesComponent } from './view-proposes.component';

describe('ViewProposesComponent', () => {
  let component: ViewProposesComponent;
  let fixture: ComponentFixture<ViewProposesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProposesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
