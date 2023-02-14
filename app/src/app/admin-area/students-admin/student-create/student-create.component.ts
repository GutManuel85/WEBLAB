import { Component } from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {Student} from "../../../dataClasses/student";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";


@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {

  registerForm: FormGroup;
  submitted = false;

  constructor(private studentService :StudentService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]]
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
    this.createStudent(data.firstname, data.lastname, data.email,
      formatDate(new Date(data.birthdate), 'yyyy-MM-dd', 'en-US'));
  }

  createStudent(firstname :string, lastname :string, email :string, birthdate :string) :void{
    let student :Student = new Student(firstname, lastname, email, birthdate, []);
    this.studentService.addStudent(student);

}

}
