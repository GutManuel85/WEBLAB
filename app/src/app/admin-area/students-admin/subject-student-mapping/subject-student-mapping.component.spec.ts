import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectStudentMappingComponent } from './subject-student-mapping.component';

describe('SubjectStudentMappingComponent', () => {
  let component: SubjectStudentMappingComponent;
  let fixture: ComponentFixture<SubjectStudentMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectStudentMappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectStudentMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
