import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuSecundaryComponent } from './navigation-menu-secundary.component';

describe('NavigationMenuSecundaryComponent', () => {
  let component: NavigationMenuSecundaryComponent;
  let fixture: ComponentFixture<NavigationMenuSecundaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMenuSecundaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuSecundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
