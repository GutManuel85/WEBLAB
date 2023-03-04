import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LogInComponent} from './log-in/log-in.component';
import {AdminAreaComponent} from './admin-area/admin-area.component';
import {StudentAreaComponent} from './student-area/student-area.component';
import {SubjectsAdminComponent} from './admin-area/subjects-admin/subjects-admin.component';
import {StudentsAdminComponent} from './admin-area/students-admin/students-admin.component';
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
import {SubjectCreateComponent} from './admin-area/subjects-admin/subject-create/subject-create.component';
import {SubjectListComponent} from './admin-area/subjects-admin/subject-list/subject-list.component';
import {SubjectItemComponent} from './admin-area/subjects-admin/subject-list/subject-item/subject-item.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {
  SubjectStudentMappingComponent
} from './admin-area/students-admin/subject-student-mapping/subject-student-mapping.component';
import {CdkDropList, DragDropModule} from "@angular/cdk/drag-drop";
import {HttpClientModule} from "@angular/common/http";
import {SubjectGradesComponent} from './admin-area/subjects-admin/subject-grades/subject-grades.component';
import {GradeFormComponent} from './admin-area/subjects-admin/subject-grades/grade-form/grade-form.component';
import {MatSelectModule} from "@angular/material/select";
import {ReloadRouteService} from "./services/reload-router.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogInComponent,
    AdminAreaComponent,
    StudentAreaComponent,
    SubjectsAdminComponent,
    StudentsAdminComponent,
    StudentListComponent,
    StudentCreateComponent,
    PlaygroundComponent,
    StudentItemComponent,
    SubjectCreateComponent,
    SubjectListComponent,
    SubjectItemComponent,
    SubjectStudentMappingComponent,
    SubjectGradesComponent,
    GradeFormComponent,
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
    ReactiveFormsModule,
    MatExpansionModule,
    CdkDropList,
    DragDropModule,
    HttpClientModule,
    MatSelectModule

  ],
  providers: [ReloadRouteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
