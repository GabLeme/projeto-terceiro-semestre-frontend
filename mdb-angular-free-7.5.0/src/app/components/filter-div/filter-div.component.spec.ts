import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDivComponent } from './filter-div.component';

describe('FilterDivComponent', () => {
  let component: FilterDivComponent;
  let fixture: ComponentFixture<FilterDivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
