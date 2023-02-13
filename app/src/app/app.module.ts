import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { AdminAreaComponent } from './admin-area/admin-area.component';
import { TeacherAreaComponent } from './teacher-area/teacher-area.component';
import { StudentAreaComponent } from './student-area/student-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInComponent,
    AdminAreaComponent,
    TeacherAreaComponent,
    StudentAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
