import { Injectable } from '@angular/core';
import { DoctorsProperties } from 'src/app/models/operational-support-models/doctors-properties';

@Injectable()
export class HospitalStatsAuxiliaryService {
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
}
