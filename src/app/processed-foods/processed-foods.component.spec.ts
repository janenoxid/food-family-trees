import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedFoodsComponent } from './processed-foods.component';

describe('ProcessedFoodsComponent', () => {
  let component: ProcessedFoodsComponent;
  let fixture: ComponentFixture<ProcessedFoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedFoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
