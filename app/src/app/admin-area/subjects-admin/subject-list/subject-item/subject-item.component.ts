import {Component, Input} from '@angular/core';
import {Subject} from "../../../../dataClasses/subject";

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css']
})
export class SubjectItemComponent {

  panelOpenState = false;

  @Input() subject: Subject;
  @Input() searchString: string;

  constructor(){
  }
}
