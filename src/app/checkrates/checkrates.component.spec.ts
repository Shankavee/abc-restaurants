import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckratesComponent } from './checkrates.component';

describe('CheckratesComponent', () => {
  let component: CheckratesComponent;
  let fixture: ComponentFixture<CheckratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckratesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
