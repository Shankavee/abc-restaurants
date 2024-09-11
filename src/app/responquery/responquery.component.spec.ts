import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponqueryComponent } from './responquery.component';  

describe('ResponqueryComponent', () => {
  let component: ResponqueryComponent;
  let fixture: ComponentFixture<ResponqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponqueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
