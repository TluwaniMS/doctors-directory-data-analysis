import { Injectable } from '@angular/core';
import { Totals } from 'src/app/models/interfaces/total-property-interface';
import { Specialisations } from 'src/app/models/view-supporting-models/specialties.component';
@Injectable()
export class MainDirectoryStatsAuxiliaryService {
  formatDataForGraphDisplay(propertyName: string, data: Totals) {
    const cardData = {
      name: propertyName,
      value: data.total,
    };

    return cardData;
  }

  formatSpecialtyDataForDoughnutGraphDisplayData(data: any[]) {
    const arrayOfFormattedSpecialisations: any[] = [];

    Specialisations.forEach((specialisation) => {
      const linkedSpecialty = data.filter(
        (specialty) => specialty.specialtyName === specialisation.title
      );

      const formattedSpecialty = {
        name: linkedSpecialty[0].specialtyName,
        value: linkedSpecialty[0].total,
      };

      arrayOfFormattedSpecialisations.push(formattedSpecialty);
    });

    return arrayOfFormattedSpecialisations;
  }
}
