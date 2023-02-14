import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subject} from "../../../dataClasses/subject";
import {SubjectService} from "../../../services/subject.service";

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent {

  registerForm: FormGroup;
  submitted = false;
  descriptionMaxLength = 300;

  constructor(private subjectService: SubjectService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      subjectName: ['', Validators.required],
      subjectCode: ['', Validators.required],
      description: ['',],
    });
  }

  onSubmit(data: any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('invalid form')
      return;
    }

    console.log('Submit: ', data);
    let subjectCode = data.subjectCode.toUpperCase( )
    this.createSubject(data.subjectName, subjectCode, data.description)}

  createSubject(subjectName, subjectCode, description): void {
    let subject: Subject = new Subject(subjectName, subjectCode, description);
    this.subjectService.addSubject(subject);
  }
}
