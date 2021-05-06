import { TestBed } from '@angular/core/testing';

import { ProcessedFoodService } from './processed-food.service';

describe('ProcessedFoodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessedFoodService = TestBed.get(ProcessedFoodService);
    expect(service).toBeTruthy();
  });
});
