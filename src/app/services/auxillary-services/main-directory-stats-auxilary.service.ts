import { Injectable } from '@angular/core';
import { Specialisations } from 'src/app/models/view-supporting-models/specialties.component';
import { Municipalities } from 'src/app/models/view-supporting-models/municipalities.component';
import { DoctorsProperties } from 'src/app/models/operational-support-models/doctors-properties';

@Injectable()
export class MainDirectoryStatsAuxiliaryService {
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

  formatTotalDoctorsInMunicipalitiesGroupedByGender(data: any[]) {
    const formattedTotalDoctorsInMunicipalityGroupedByGender: any[] = [];

    Municipalities.forEach((municipalProperties) => {
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
