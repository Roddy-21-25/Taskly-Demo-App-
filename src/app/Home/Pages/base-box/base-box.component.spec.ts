import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBoxComponent } from './base-box.component';

describe('BaseBoxComponent', () => {
  let component: BaseBoxComponent;
  let fixture: ComponentFixture<BaseBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseBoxComponent]
    });
    fixture = TestBed.createComponent(BaseBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
