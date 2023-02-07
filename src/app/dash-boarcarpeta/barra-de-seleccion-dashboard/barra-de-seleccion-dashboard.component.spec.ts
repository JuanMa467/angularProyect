import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraDeSeleccionDashboardComponent } from './barra-de-seleccion-dashboard.component';

describe('BarraDeSeleccionDashboardComponent', () => {
  let component: BarraDeSeleccionDashboardComponent;
  let fixture: ComponentFixture<BarraDeSeleccionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraDeSeleccionDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraDeSeleccionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
