import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import {SubjectService} from "../services/subject.service";

@Component({
  selector: 'app-teacher-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./student-area.component.css']
})
export class StudentAreaComponent implements OnInit {

  students: any[];
  subjects: any[]; // Add this property for the subject list

  constructor(private studentService: StudentService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });

    this.subjectService.getSubjects().subscribe((subjects) => {
      this.subjects = subjects;
    });
  }

  getSubjectName(subjectId: string): string {
    const subject = this.subjects.find((s) => s.id === subjectId);
    return subject ? subject.name : '';
  }

}
