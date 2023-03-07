import {Component, OnInit} from '@angular/core';
import {StudentService} from '../services/student.service';
import {SubjectService} from '../services/subject.service';
import {LoginService} from "../services/login.service";
import {User} from "../dataClasses/user";

@Component({
  selector: 'app-teacher-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./student-area.component.css']
})
export class StudentAreaComponent implements OnInit {
  students: any[];
  subjects: any[]; // Add this property for the subject list

  constructor(private studentService: StudentService, private subjectService: SubjectService, public loginService: LoginService) {
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      console.log(localStorage.getItem("user"));
      let user: User = JSON.parse(localStorage.getItem("user"));
      if(user.role === "student") {
        for (let student of students) {
          console.log(student.email);
          if (student.email == user.email) {
            this.students = [];
            this.students.push(student);
            console.log("email matched");
          }
        }
      }else{
        this.students = students;
      }
    });
    this.subjectService.getSubjects().subscribe((subjects) => {
      this.subjects = subjects;
    });
  }

  getSubjectName(subjectId: string): string {
    const subject = this.subjects.find((s) => s.id === subjectId);
    return subject ? subject.name : '';
  }

  getUniqueSubjects(grades: any[]): string[] {
    return Array.from(new Set(grades.map((g) => g.subjectId)));
  }

  getGradesBySubjectId(grades: any[], subjectId: string): any[] {
    return grades.filter((g) => g.subjectId === subjectId);
  }

  getAverageGradeBySubjectId(grades: any[], subjectId: string): number {
    const subjectGrades = grades.filter(g => g.subjectId === subjectId);
    const sum = subjectGrades.reduce((acc, curr) => acc + curr.gradeValue, 0);
    const average = sum / subjectGrades.length;
    return parseFloat(average.toFixed(2));
  }

}

