import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './indexcarpeta/navbar/navbar.component';
import { BannerComponent } from './indexcarpeta/banner/banner.component';
import { AcercaDeMiComponent } from './indexcarpeta/acerca-de-mi/acerca-de-mi.component';
import { LoginComponent } from './modals/login/login.component';
import { AudioComponent } from './modals/audio/audio.component';
import { RedesComponent } from './indexcarpeta/redes/redes.component';
import { ExperienciaComponent } from './indexcarpeta/experiencia/experiencia.component';
import { SkillsComponent } from './indexcarpeta/skills/skills.component';
import { EstudiosComponent } from './indexcarpeta/estudios/estudios.component';
import { DashBoarComponent } from './dash-boarcarpeta/dash-boar/dash-boar.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './indexcarpeta/index/index.component';
import { NavbarDasboarComponent } from './dash-boarcarpeta/navbar-dasboar/navbar-dasboar.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { ButtonOutputComponent } from './button-output/button-output.component';
import { ProyectosComponent } from './indexcarpeta/proyectos/proyectos.component';
import { BarraDeSeleccionDashboardComponent } from './dash-boarcarpeta/barra-de-seleccion-dashboard/barra-de-seleccion-dashboard.component';
import { FooterComponent } from './indexcarpeta/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    AcercaDeMiComponent,
    LoginComponent,
    AudioComponent,
    RedesComponent,
    ExperienciaComponent,
    SkillsComponent,
    EstudiosComponent,
    DashBoarComponent,
    ErrorComponent,
    IndexComponent,
    NavbarDasboarComponent,
    ButtonLoginComponent,
    ButtonOutputComponent,
    ProyectosComponent,
    BarraDeSeleccionDashboardComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
