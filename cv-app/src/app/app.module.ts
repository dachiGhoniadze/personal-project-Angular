import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivateInfoComponent } from './private-info/private-info.component';
import { ExpInfoComponent } from './exp-info/exp-info.component';
import { EduInfoComponent } from './edu-info/edu-info.component';
import { ResumeComponent } from './resume/resume.component';
import { FinalComponent } from './final/final.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateInfoComponent,
    ExpInfoComponent,
    EduInfoComponent,
    ResumeComponent,
    FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
