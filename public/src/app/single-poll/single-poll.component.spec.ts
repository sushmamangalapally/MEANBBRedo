import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePollComponent } from './single-poll.component';

describe('SinglePollComponent', () => {
  let component: SinglePollComponent;
  let fixture: ComponentFixture<SinglePollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
