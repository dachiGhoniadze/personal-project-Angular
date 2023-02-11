import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrivateInfoComponent } from './private-info/private-info.component';
import {ExpInfoComponent} from './exp-info/exp-info.component'
import { EduInfoComponent } from './edu-info/edu-info.component';
import { FinalComponent } from './final/final.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'private-info', component: PrivateInfoComponent },
  { path: 'exp-info', component: ExpInfoComponent },
  { path: 'edu-info', component: EduInfoComponent },
  { path: 'final', component: FinalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
