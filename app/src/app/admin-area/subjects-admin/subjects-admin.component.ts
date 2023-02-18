import {Component, ViewChild} from '@angular/core';
import {MatTabChangeEvent, MatTabGroup} from "@angular/material/tabs";
import {SubjectService} from "../../services/subject.service";

@Component({
  selector: 'app-subjects-admin',
  templateUrl: './subjects-admin.component.html',
  styleUrls: ['./subjects-admin.component.css']
})
export class SubjectsAdminComponent {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  constructor(private subjectService: SubjectService) {
  }
}
