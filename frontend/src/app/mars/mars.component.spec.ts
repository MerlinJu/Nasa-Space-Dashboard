import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsComponent } from './mars.component';

describe('MarsComponent', () => {
  let component: MarsComponent;
  let fixture: ComponentFixture<MarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
