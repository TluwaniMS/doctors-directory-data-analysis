import { Injectable } from '@angular/core';
import { Hospitals } from 'src/app/models/view-supporting-models/hospitals.component';
import { DoctorsProperties } from 'src/app/models/operational-support-models/doctors-properties';

@Injectable()
export class SpecialtyStatsAuxiliaryService {
  formatSpecialtyCountInHospitalsGroupedByGenderGraphDisplayData(data: any[]) {
    const formattedSpecialtyCountInHospitalsGroupedByGender: any[] = [];

    Hospitals.forEach((model) => {
      const linkedHospital = data.filter(
        (hospital) => hospital.hospitalName === model.title
      );

      const totalMalesFormattedData = {
        name: DoctorsProperties.Male,
        value: linkedHospital[0].totalMaleDoctors,
      };

      const totalFemalesFormattedData = {
        name: DoctorsProperties.Female,
        value: linkedHospital[0].totalFemaleDoctors,
      };

      const formattedTotalDoctorsInMunicipaltiyGroupedByGender = {
        name: linkedHospital[0].hospitalName,
        series: [totalMalesFormattedData, totalFemalesFormattedData],
      };

      formattedSpecialtyCountInHospitalsGroupedByGender.push(
        formattedTotalDoctorsInMunicipaltiyGroupedByGender
      );
    });

    return formattedSpecialtyCountInHospitalsGroupedByGender;
  }
}
