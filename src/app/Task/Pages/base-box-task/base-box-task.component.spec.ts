import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBoxTaskComponent } from './base-box-task.component';

describe('BaseBoxTaskComponent', () => {
  let component: BaseBoxTaskComponent;
  let fixture: ComponentFixture<BaseBoxTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseBoxTaskComponent]
    });
    fixture = TestBed.createComponent(BaseBoxTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
