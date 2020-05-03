import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeVideoComponent } from './practice-video.component';

describe('PracticeVideoComponent', () => {
  let component: PracticeVideoComponent;
  let fixture: ComponentFixture<PracticeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
