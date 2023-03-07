import {Component} from '@angular/core';
import {ReloadRouteService} from "../services/reload-router.service";
import {LoginService} from "../services/login.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  submitted: boolean = false;
  signInForm: FormGroup;

  constructor(private reloadRouteService: ReloadRouteService, private loginService: LoginService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(data: any) {
    this.submitted = true;

    console.log("********SignIn**********")
    console.log(data.email);
    console.log(data.password);
    console.log(this.loginService.role)

    // stop here if form is invalid
    if (this.signInForm.invalid) {
      console.log('invalid signIn')
      return;
    }

    console.log('Submit: ', data);
    this.doLogIn(data);
    //this.showSuccessMessage()
  }

  doLogIn(data: any): void {
    this.loginService.login(data.email, data.password).subscribe(() => {
      if (this.loginService.isLoggedIn) {
        console.log("********* Login was successful ***********")
        if (this.loginService.role === "admin") {
          this.reloadRouteService.redirectTo("./students-admin")
        }
        if (this.loginService.role === "teacher") {
          this.reloadRouteService.redirectTo("./subjects-admin")
        }
        if (this.loginService.role === "student") {
          this.reloadRouteService.redirectTo("./student-area")
        }
      }
    });
  }
}
