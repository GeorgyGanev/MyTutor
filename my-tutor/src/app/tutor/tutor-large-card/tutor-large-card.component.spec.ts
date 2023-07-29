import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorLargeCardComponent } from './tutor-large-card.component';

describe('TutorLargeCardComponent', () => {
  let component: TutorLargeCardComponent;
  let fixture: ComponentFixture<TutorLargeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorLargeCardComponent]
    });
    fixture = TestBed.createComponent(TutorLargeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
