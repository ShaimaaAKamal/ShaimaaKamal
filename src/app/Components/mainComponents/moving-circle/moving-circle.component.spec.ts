import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingCircleComponent } from './moving-circle.component';

describe('MovingCircleComponent', () => {
  let component: MovingCircleComponent;
  let fixture: ComponentFixture<MovingCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovingCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
