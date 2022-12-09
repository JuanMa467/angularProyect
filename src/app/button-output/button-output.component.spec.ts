import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOutputComponent } from './button-output.component';

describe('ButtonOutputComponent', () => {
  let component: ButtonOutputComponent;
  let fixture: ComponentFixture<ButtonOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
