import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSingleCardComponent } from './tutor-single-card.component';

describe('TutorSingleCardComponent', () => {
  let component: TutorSingleCardComponent;
  let fixture: ComponentFixture<TutorSingleCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorSingleCardComponent]
    });
    fixture = TestBed.createComponent(TutorSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
