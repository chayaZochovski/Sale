import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentsFormComponent } from './presents-form.component';

describe('PresentsFormComponent', () => {
  let component: PresentsFormComponent;
  let fixture: ComponentFixture<PresentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
