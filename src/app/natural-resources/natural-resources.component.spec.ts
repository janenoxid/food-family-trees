import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalResourcesComponent } from './natural-resources.component';

describe('NaturalResourcesComponent', () => {
  let component: NaturalResourcesComponent;
  let fixture: ComponentFixture<NaturalResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturalResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturalResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
