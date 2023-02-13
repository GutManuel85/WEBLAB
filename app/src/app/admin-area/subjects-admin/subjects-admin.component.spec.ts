import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsAdminComponent } from './subjects-admin.component';

describe('SubjectsAdminComponent', () => {
  let component: SubjectsAdminComponent;
  let fixture: ComponentFixture<SubjectsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
