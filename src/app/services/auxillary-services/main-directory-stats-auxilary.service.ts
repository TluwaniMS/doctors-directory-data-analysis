import { Injectable } from '@angular/core';
import { Totals } from 'src/app/models/interfaces/total-property-interface';
import { Specialisations } from 'src/app/models/view-supporting-models/specialties.component';
import { Municipalities } from 'src/app/models/view-supporting-models/municipalities.component';

@Injectable()
export class MainDirectoryStatsAuxiliaryService {
  formatDataForGraphDisplay(propertyName: string, data: Totals) {
    const graphData = {
      name: propertyName,
      value: data.total,
    };

    return graphData;
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

  formatTotalHospitalMunicipalitesGraphDisplayData(data: any[]) {
    const arrayOfFormattedMunicipalities: any[] = [];

    Municipalities.forEach((municipalProperties) => {
      const linkedMunicipality = data.filter(
        (municipality) =>
          municipality.municipalityName === municipalProperties.title
      );

      const formattedMunicipality = {
        name: linkedMunicipality[0].municipalityName,
        value: linkedMunicipality[0].totalHospitals,
      };

      arrayOfFormattedMunicipalities.push(formattedMunicipality);
    });

    return arrayOfFormattedMunicipalities;
  }
}
