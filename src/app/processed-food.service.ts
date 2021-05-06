import { Injectable } from '@angular/core';
import { ProcessedFood} from './processedFood';
import { PROCESSEDFOODS } from './mock-processedFoods';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessedFoodService {

  constructor() { }

  getProcessedFoods(): Observable<ProcessedFood[]> {
    const processedFoods = of(PROCESSEDFOODS);
    return processedFoods;
  }
}
