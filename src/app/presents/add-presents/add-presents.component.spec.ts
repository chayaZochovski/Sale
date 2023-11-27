import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPresentsComponent } from './add-presents.component';

describe('AddPresentsComponent', () => {
  let component: AddPresentsComponent;
  let fixture: ComponentFixture<AddPresentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPresentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPresentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
