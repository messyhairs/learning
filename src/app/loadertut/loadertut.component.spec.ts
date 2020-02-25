import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadertutComponent } from './loadertut.component';

describe('LoadertutComponent', () => {
  let component: LoadertutComponent;
  let fixture: ComponentFixture<LoadertutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadertutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadertutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
