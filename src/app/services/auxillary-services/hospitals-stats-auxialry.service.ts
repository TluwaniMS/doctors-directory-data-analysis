import { Injectable } from '@angular/core';
import { DoctorsProperties } from 'src/app/models/operational-support-models/doctors-properties';
import { Specialisations } from 'src/app/models/view-supporting-models/specialties.component';

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

  formatTotalSpecialisationCountGroupedByGender(data: any[]) {
    const formattedSpecialisationCountGroupedByGender: any[] = [];

    Specialisations.forEach((specialisation) => {
      const linkedSpecialty: any = data.filter(
        (count) => count.specialtyName === specialisation.title
      );

      const totalFemaleCount = linkedSpecialty.genderCount.filter(
        (count: any) => count.gender === DoctorsProperties.Female
      );

      const totalMaleCount = linkedSpecialty.genderCount.filter(
        (count: any) => count.gender === DoctorsProperties.Male
      );

      const totalFemaleCountObject = {
        name: DoctorsProperties.Female,
        value: totalFemaleCount[0].total,
      };

      const totalMaleCountObject = {
        name: DoctorsProperties.Male,
        value: totalMaleCount[0].total,
      };

      const formattedTotalGenderCountInSpecialty = {
        name: specialisation.title,
        series: [totalFemaleCountObject, totalMaleCountObject],
      };

      formattedSpecialisationCountGroupedByGender.push(
        formattedTotalGenderCountInSpecialty
      );
    });

    return formattedSpecialisationCountGroupedByGender;
  }
}
