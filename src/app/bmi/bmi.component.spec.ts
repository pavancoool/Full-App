/* import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiComponent } from './bmi.component';

describe('BmiComponent', () => {
  let component: BmiComponent;
  let fixture: ComponentFixture<BmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BmiComponent } from './bmi.component';

describe('BmiComponent', () => {
  let component: BmiComponent;
  let fixture: ComponentFixture<BmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate underweight', () => {
    component.height = 1.8;
    component.weight = 50;
    component.sub();
    expect(component.bmi).toBe('unerweight');
  });

  it('should calculate normal weight', () => {
    component.height = 1.75;
    component.weight = 70;
    component.sub();
    expect(component.bmi).toBe('Normal');
  });

  it('should calculate overweight', () => {
    component.height = 1.6;
    component.weight = 75;
    component.sub();
    expect(component.bmi).toBe('overweight');
  });

  it('should calculate moderately obese', () => {
    component.height = 1.5;
    component.weight = 85;
    component.sub();
    expect(component.bmi).toBe('Moderatly obese');
  });

  it('should calculate severely obese', () => {
    component.height = 1.4;
    component.weight = 90;
    component.sub();
    expect(component.bmi).toBe('Severely Obese');
  });

  it('should calculate morbidly obese', () => {
    component.height = 1.3;
    component.weight = 100;
    component.sub();
    expect(component.bmi).toBe('morbidly obese');
  });

  it('should show error for zero or negative values', () => {
    spyOn(window, 'alert');
    component.height = 0;
    component.weight = 0;
    component.sub();
    expect(window.alert).toHaveBeenCalledWith('errror');
  });

});

