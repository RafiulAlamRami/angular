import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputDatBinding } from './input-output-dat-binding';

describe('InputOutputDatBinding', () => {
  let component: InputOutputDatBinding;
  let fixture: ComponentFixture<InputOutputDatBinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputDatBinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputDatBinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
