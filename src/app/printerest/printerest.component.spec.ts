import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterestComponent } from './printerest.component';

describe('PrinterestComponent', () => {
  let component: PrinterestComponent;
  let fixture: ComponentFixture<PrinterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
