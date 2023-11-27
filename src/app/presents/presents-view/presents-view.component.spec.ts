import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentsViewComponent } from './presents-view.component';

describe('PresentsViewComponent', () => {
  let component: PresentsViewComponent;
  let fixture: ComponentFixture<PresentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
