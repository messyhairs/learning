import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablepipesComponent } from './observablepipes.component';

describe('ObservablepipesComponent', () => {
  let component: ObservablepipesComponent;
  let fixture: ComponentFixture<ObservablepipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablepipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablepipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
