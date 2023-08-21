import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNoteComponent } from './base-note.component';

describe('BaseNoteComponent', () => {
  let component: BaseNoteComponent;
  let fixture: ComponentFixture<BaseNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseNoteComponent]
    });
    fixture = TestBed.createComponent(BaseNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
