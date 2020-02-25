import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicodeComponent } from './dicode.component';

describe('DicodeComponent', () => {
  let component: DicodeComponent;
  let fixture: ComponentFixture<DicodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
