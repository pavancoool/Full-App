import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindiingComponent } from './data-bindiing.component';

describe('DataBindiingComponent', () => {
  let component: DataBindiingComponent;
  let fixture: ComponentFixture<DataBindiingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindiingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindiingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
