import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorRegistrationComponent } from './tutor-registration.component';

describe('TutorRegistrationComponent', () => {
  let component: TutorRegistrationComponent;
  let fixture: ComponentFixture<TutorRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorRegistrationComponent]
    });
    fixture = TestBed.createComponent(TutorRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
