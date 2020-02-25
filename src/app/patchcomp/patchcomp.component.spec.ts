import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchcompComponent } from './patchcomp.component';

describe('PatchcompComponent', () => {
  let component: PatchcompComponent;
  let fixture: ComponentFixture<PatchcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
