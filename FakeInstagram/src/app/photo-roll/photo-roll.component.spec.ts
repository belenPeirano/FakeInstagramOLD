import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreteComponent } from './photo-roll.component';

describe('CarreteComponent', () => {
  let component: CarreteComponent;
  let fixture: ComponentFixture<CarreteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarreteComponent]
    });
    fixture = TestBed.createComponent(CarreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
