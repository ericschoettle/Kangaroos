import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JackComponent } from './jack.component';

describe('JackComponent', () => {
  let component: JackComponent;
  let fixture: ComponentFixture<JackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
