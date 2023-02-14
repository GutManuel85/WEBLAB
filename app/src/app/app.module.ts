import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
import {StudentCreateComponent} from './admin-area/students-admin/student-create/student-create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatListModule} from "@angular/material/list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {PlaygroundComponent} from './playground/playground.component';
import {StudentItemComponent} from './admin-area/students-admin/student-list/student-item/student-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import { HomeComponent } from './home/home.component';



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
    StudentCreateComponent,
    PlaygroundComponent,
    StudentItemComponent,
    HomeComponent
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
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
