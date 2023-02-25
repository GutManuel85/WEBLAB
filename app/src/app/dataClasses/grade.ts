export class Grade{
  subjectId: string;
  gradeValue: number;

  constructor(subjectId: string, gradeValue: number) {
    this.subjectId = subjectId;
    this.gradeValue = gradeValue;
  }
}
