import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonformscompComponent } from './jsonformscomp.component';

describe('JsonformscompComponent', () => {
  let component: JsonformscompComponent;
  let fixture: ComponentFixture<JsonformscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonformscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonformscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
