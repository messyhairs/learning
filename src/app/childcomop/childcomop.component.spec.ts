import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomopComponent } from './childcomop.component';

describe('ChildcomopComponent', () => {
  let component: ChildcomopComponent;
  let fixture: ComponentFixture<ChildcomopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcomopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcomopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
