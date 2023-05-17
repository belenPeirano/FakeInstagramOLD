import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnselectedButtonComponent } from './unselected-button.component';

describe('UnselectedButtonComponent', () => {
  let component: UnselectedButtonComponent;
  let fixture: ComponentFixture<UnselectedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnselectedButtonComponent]
    });
    fixture = TestBed.createComponent(UnselectedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
