import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSearchComponent } from './box-search.component';

describe('BoxSearchComponent', () => {
  let component: BoxSearchComponent;
  let fixture: ComponentFixture<BoxSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxSearchComponent]
    });
    fixture = TestBed.createComponent(BoxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
