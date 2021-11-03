import { Injectable } from '@angular/core';

@Injectable()
export class MunicipalityStatsAuxiliaryService {
  formatGraphDisplayData(propertyName: string, count: number) {
    const graphData = {
      name: propertyName,
      value: count,
    };

    return graphData;
  }
}
