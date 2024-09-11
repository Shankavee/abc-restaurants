import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffnavComponent } from './staffnav.component';

describe('StaffnavComponent', () => {
  let component: StaffnavComponent;
  let fixture: ComponentFixture<StaffnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
