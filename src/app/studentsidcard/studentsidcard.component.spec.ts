import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsidcardComponent } from './studentsidcard.component';

describe('StudentsidcardComponent', () => {
  let component: StudentsidcardComponent;
  let fixture: ComponentFixture<StudentsidcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsidcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsidcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
