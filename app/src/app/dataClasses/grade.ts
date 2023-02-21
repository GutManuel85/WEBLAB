export class Grade{
  subjectId: string;
  gradeValue: string;

  constructor(subjectId: string, gradeValue: string) {
    this.subjectId = subjectId;
    this.gradeValue = gradeValue;
  }
}
