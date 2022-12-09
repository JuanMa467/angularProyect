import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoarComponent } from './dash-boar/dash-boar.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
 {path: 'index' , component:IndexComponent},
 {path: 'dashboar' , component:DashBoarComponent},
 {path: '', redirectTo: '/index' , pathMatch:'full'},
 {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
