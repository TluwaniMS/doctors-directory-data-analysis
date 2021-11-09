import { Injectable } from '@angular/core';
import { Totals } from 'src/app/models/interfaces/total-property-interface';

@Injectable()
export class SharedStatsAuxiliaryService {
  formatDataForGraphDisplay(propertyName: string, data: Totals) {
    const graphData = {
      name: propertyName,
      value: data.total,
    };

    return graphData;
  }
}
