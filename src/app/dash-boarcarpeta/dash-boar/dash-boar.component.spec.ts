import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoarComponent } from './dash-boar.component';

describe('DashBoarComponent', () => {
  let component: DashBoarComponent;
  let fixture: ComponentFixture<DashBoarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
