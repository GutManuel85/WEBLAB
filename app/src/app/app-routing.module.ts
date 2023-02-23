import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentsAdminComponent} from "./admin-area/students-admin/students-admin.component";
import {HomeComponent} from "./home/home.component";
import {SubjectsAdminComponent} from "./admin-area/subjects-admin/subjects-admin.component";
import {ClassesAdminComponent} from "./admin-area/classes-admin/classes-admin.component";
import {TeacherAreaComponent} from "./teacher-area/teacher-area.component";
import {
  SubjectStudentMappingComponent
} from "./admin-area/students-admin/subject-student-mapping/subject-student-mapping.component";
import {LogInComponent} from "./log-in/log-in.component";
import {SubjectGradesComponent} from "./admin-area/subjects-admin/subject-grades/subject-grades.component";
import {StudentAreaComponent} from "./student-area/student-area.component";

const routes: Routes = [
  { path: 'login', component: LogInComponent},
  { path: '', component: HomeComponent},
  { path: 'students-admin', component: StudentsAdminComponent },
  { path: 'students-admin/enroll', component: SubjectStudentMappingComponent},
  { path: 'students-admin/enroll/:id', component: SubjectStudentMappingComponent},
  { path: 'subjects-admin', component: SubjectsAdminComponent },
  { path: 'subjects-admin/grades/:id', component: SubjectGradesComponent},
  { path: 'classes-admin', component: ClassesAdminComponent},
  { path: 'teacher', component: TeacherAreaComponent},
  { path: 'student-area', component: StudentAreaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
