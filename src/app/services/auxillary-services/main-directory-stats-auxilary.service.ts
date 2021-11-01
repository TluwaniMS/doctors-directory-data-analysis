import { Injectable } from '@angular/core';
import { Totals } from 'src/app/models/interfaces/total-property-interface';

@Injectable()
export class MainDirectoryStatsAuxiliaryService {
  formatDataForGraphDisplay(propertyName: string, data: Totals) {
    const cardData = {
      name: propertyName,
      value: data.total,
    };

    return cardData;
  }
}
