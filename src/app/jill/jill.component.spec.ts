import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JillComponent } from './jill.component';

describe('JillComponent', () => {
  let component: JillComponent;
  let fixture: ComponentFixture<JillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
