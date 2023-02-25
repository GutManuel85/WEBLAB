import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-teacher-area',
  templateUrl: './student-area.component.html',
  styleUrls: ['./student-area.component.css']
})
export class StudentAreaComponent implements OnInit {
  students: any[];
  subjects: any[]; // Add this property for the subject list

  constructor(private studentService: StudentService, private subjectService: SubjectService) {}

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

  getUniqueSubjects(grades: any[]): string[] {
    return Array.from(new Set(grades.map((g) => g.subjectId)));
  }

  getGradesBySubjectId(grades: any[], subjectId: string): any[] {
    return grades.filter((g) => g.subjectId === subjectId);
  }

  getAverageGradeBySubjectId(grades: any[], subjectId: string): number {
    const subjectGrades = grades.filter(g => g.subjectId === subjectId);
    const sum = subjectGrades.reduce((acc, curr) => acc + curr.gradeValue, 0);
    return sum / subjectGrades.length;
  }
}

