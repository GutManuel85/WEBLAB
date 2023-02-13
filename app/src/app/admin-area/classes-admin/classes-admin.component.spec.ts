import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesAdminComponent } from './classes-admin.component';

describe('ClassesAdminComponent', () => {
  let component: ClassesAdminComponent;
  let fixture: ComponentFixture<ClassesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassesAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
