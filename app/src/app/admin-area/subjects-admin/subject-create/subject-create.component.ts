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
  submitted: boolean = false;
  descriptionMaxLength: number = 300;
  successMessageShown: boolean = false;
  successMessage: string = "Erfolgreich erfasst";


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
    this.subjectService.getSubjects();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('invalid form')
      return;
    }

    console.log('Submit: ', data);
    let subjectCode = data.subjectCode.toUpperCase( );
    this.createSubject(data.subjectName, subjectCode, data.description);
    this.showSuccessMessage();
  }

  createSubject(subjectName, subjectCode, description): void {
    console.log("createSubject called")
    let subject: Subject = new Subject(subjectName, subjectCode, description);
    this.subjectService.addSubject(subject);
  }

  showSuccessMessage() {
    this.successMessageShown = true;
    setTimeout(() => {
      this.successMessageShown = false;
      this.submitted = false;
      this.registerForm.reset();
    }, 3000);
  }

}
