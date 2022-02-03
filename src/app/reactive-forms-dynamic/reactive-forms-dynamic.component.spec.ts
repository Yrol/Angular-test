import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsDynamicComponent } from './reactive-forms-dynamic.component';

describe('ReactiveFormsDynamicComponent', () => {
  let component: ReactiveFormsDynamicComponent;
  let fixture: ComponentFixture<ReactiveFormsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
