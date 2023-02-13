import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LogInComponent} from './log-in/log-in.component';
import {AdminAreaComponent} from './admin-area/admin-area.component';
import {TeacherAreaComponent} from './teacher-area/teacher-area.component';
import {StudentAreaComponent} from './student-area/student-area.component';
import {SubjectsAdminComponent} from './admin-area/subjects-admin/subjects-admin.component';
import {StudentsAdminComponent} from './admin-area/students-admin/students-admin.component';
import {ClassesAdminComponent} from './admin-area/classes-admin/classes-admin.component';
import {StudentListComponent} from './admin-area/students-admin/student-list/student-list.component';
import {StudentEditComponent} from './admin-area/students-admin/student-edit/student-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {PlaygroundComponent} from './playground/playground.component';
import {StudentItemComponent} from './admin-area/students-admin/student-list/student-item/student-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInComponent,
    AdminAreaComponent,
    TeacherAreaComponent,
    StudentAreaComponent,
    SubjectsAdminComponent,
    StudentsAdminComponent,
    ClassesAdminComponent,
    StudentListComponent,
    StudentEditComponent,
    PlaygroundComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
