import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorShortCardComponent } from './tutor-short-card.component';

describe('TutorShortCardComponent', () => {
  let component: TutorShortCardComponent;
  let fixture: ComponentFixture<TutorShortCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorShortCardComponent]
    });
    fixture = TestBed.createComponent(TutorShortCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
