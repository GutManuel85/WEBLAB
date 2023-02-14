import {v4 as uuidv4} from 'uuid';

export class Subject{

  id: string;
  name: string;
  code: string;
  description: string;

  constructor(subjectName :string, subjectCode :string, subjectDescription :string) {
    this.id = uuidv4();
    this.name = subjectName;
    this.code = subjectCode;
    this.description = subjectDescription;
  }
}
