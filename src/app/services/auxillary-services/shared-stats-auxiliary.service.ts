import { Injectable } from '@angular/core';
import { Totals } from 'src/app/models/interfaces/total-property-interface';
import { DoctorsProperties } from 'src/app/models/operational-support-models/doctors-properties';
import { Municipalities } from 'src/app/models/view-supporting-models/municipalities.component';

@Injectable()
export class SharedStatsAuxiliaryService {
  formatDataForGraphDisplay(propertyName: string, data: Totals) {
    const graphData = {
      name: propertyName,
      value: data.total,
    };

    return graphData;
  }

  formatGenderCountDoughnutChartData(data: any[]) {
    const preparedGenderCountChartData = [];

    const femalesCount = data.filter(
      (count) => count.gender === DoctorsProperties.Female
    );

    const malesCount = data.filter(
      (count) => count.gender === DoctorsProperties.Male
    );

    const preparedFemalesCount = {
      name: femalesCount[0].gender,
      value: femalesCount[0].total,
    };

    const preparedMalesCount = {
      name: malesCount[0].gender,
      value: malesCount[0].total,
    };

    preparedGenderCountChartData.push(preparedFemalesCount, preparedMalesCount);

    return preparedGenderCountChartData;
  }

  formatTotalDoctorsInMunicipalitiesGroupedByGender(data: any[]) {
    const formattedTotalDoctorsInMunicipalityGroupedByGender: any[] = [];

    Municipalities.forEach((municipalProperties: any) => {
      const linkedMunicipality = data.filter(
        (municipality) =>
          municipality.municipalityName === municipalProperties.title
      );

      const totalMalesFormattedData = {
        name: DoctorsProperties.Male,
        value: linkedMunicipality[0].totalMaleDoctors,
      };

      const totalFemalesFormattedData = {
        name: DoctorsProperties.Female,
        value: linkedMunicipality[0].totalFemaleDoctors,
      };

      const formattedTotalDoctorsInMunicipaltiyGroupedByGender = {
        name: linkedMunicipality[0].municipalityName,
        series: [totalMalesFormattedData, totalFemalesFormattedData],
      };

      formattedTotalDoctorsInMunicipalityGroupedByGender.push(
        formattedTotalDoctorsInMunicipaltiyGroupedByGender
      );
    });

    return formattedTotalDoctorsInMunicipalityGroupedByGender;
  }
}
