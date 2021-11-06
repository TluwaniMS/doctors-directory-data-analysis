import { Injectable } from '@angular/core';
import { DoctorsProperties } from 'src/app/models/operational-support-models/doctors-properties';

@Injectable()
export class MunicipalityStatsAuxiliaryService {
  formatGraphDisplayData(propertyName: string, count: number) {
    const graphData = {
      name: propertyName,
      value: count,
    };

    return graphData;
  }

  formatGenderDataForDoughnutGraphDisplay(data: any[]) {
    const totalFemalesFormattedData = {
      name: DoctorsProperties.Female,
      value: data[0].totalFemaleDoctors,
    };

    const totalMalesFormattedData = {
      name: DoctorsProperties.Male,
      value: data[0].totalMaleDoctors,
    };

    return [totalFemalesFormattedData, totalMalesFormattedData];
  }

  formatDoctorsCountInHospitals(data: any[]) {
    const preparedDoctorsCountInHospitals: any = [];

    data.forEach((hospital) => {
      const preparedHospital = {
        name: hospital.hospitalName,
        value: hospital.total,
      };

      preparedDoctorsCountInHospitals.push(preparedHospital);
    });

    return preparedDoctorsCountInHospitals;
  }
}
