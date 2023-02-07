import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDasboarComponent } from './navbar-dasboar.component';

describe('NavbarDasboarComponent', () => {
  let component: NavbarDasboarComponent;
  let fixture: ComponentFixture<NavbarDasboarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDasboarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDasboarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
