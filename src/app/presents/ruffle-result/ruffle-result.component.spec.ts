import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuffleResultComponent } from './ruffle-result.component';

describe('RuffleResultComponent', () => {
  let component: RuffleResultComponent;
  let fixture: ComponentFixture<RuffleResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuffleResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuffleResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
