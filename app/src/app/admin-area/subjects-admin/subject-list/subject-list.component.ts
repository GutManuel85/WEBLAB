import { Component } from '@angular/core';
import {Subject} from "../../../dataClasses/subject";
import {SubjectService} from "../../../services/subject.service";
import {ReloadRouteService} from "../../../services/reload-router.service";

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {

  subjects: Subject[] = [];
  mySearchString :string = '';

  constructor(private subjectService: SubjectService, private reloadRouteService: ReloadRouteService) {
  }

  ngOnInit(): void{
    this.getSubjects();
    console.log(this.subjects);
  }

  getSubjects(): void{
    this.subjectService.getSubjects()
      .subscribe(subjects => this.subjects = subjects);
  }

  reloadList(): void{
    console.log("reloadList was called")
    this.reloadRouteService.redirectTo("./subjects-admin");
  }
}

