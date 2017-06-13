import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoeyComponent } from './joey.component';

describe('JoeyComponent', () => {
  let component: JoeyComponent;
  let fixture: ComponentFixture<JoeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
