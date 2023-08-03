import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTutorComponent } from './edit-tutor.component';

describe('EditTutorComponent', () => {
  let component: EditTutorComponent;
  let fixture: ComponentFixture<EditTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTutorComponent]
    });
    fixture = TestBed.createComponent(EditTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
