import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsplatformComponent } from './rxjsplatform.component';

describe('RxjsplatformComponent', () => {
  let component: RxjsplatformComponent;
  let fixture: ComponentFixture<RxjsplatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsplatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsplatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
