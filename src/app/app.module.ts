import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { AcercaDeMiComponent } from './acerca-de-mi/acerca-de-mi.component';
import { LoginComponent } from './modals/login/login.component';
import { AudioComponent } from './modals/audio/audio.component';
import { RedesComponent } from './redes/redes.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { SkillsComponent } from './skills/skills.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { DashBoarComponent } from './dash-boar/dash-boar.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbarDasboarComponent } from './navbar-dasboar/navbar-dasboar.component';
import { ButtonLoginComponent } from './button-login/button-login.component';
import { ButtonOutputComponent } from './button-output/button-output.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
