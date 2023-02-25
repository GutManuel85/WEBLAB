import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAreaComponent } from './student-area.component';

describe('StudentAreaComponent', () => {
  let component: StudentAreaComponent;
  let fixture: ComponentFixture<StudentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate the average grade correctly for a subject', () => {
    const grades = [
      { subjectId: '1', gradeValue: 2 },
      { subjectId: '1', gradeValue: 3 },
      { subjectId: '1', gradeValue: 4 },
    ];
    const subjectId = '1';
    const average = component.getAverageGradeBySubjectId(grades, subjectId);
    expect(average).toEqual(3);
  });
});
