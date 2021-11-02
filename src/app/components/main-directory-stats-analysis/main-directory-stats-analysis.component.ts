import { Component, OnInit } from '@angular/core';
import { MainDirectoryStatsEndPointService } from 'src/app/services/end-point-services/main-directory-end-point-service.service';
import { Totals } from 'src/app/models/interfaces/total-property-interface';
import { MainDirectoryStatsAuxiliaryService } from 'src/app/services/auxillary-services/main-directory-stats-auxilary.service';
import { ViewSupportingModelTitles } from 'src/app/models/operational-support-models/view-supporting-model-titles.component';

@Component({
  selector: 'app-main-directory-stats-analysis',
  templateUrl: './main-directory-stats-analysis.component.html',
  styleUrls: ['./main-directory-stats-analysis.component.css'],
})
export class MainDirectoryStatsAnalysisComponent implements OnInit {
  totalDoctors: Totals | any;
  totalMunicipalities: Totals | any;
  totalHospitals: Totals | any;

  totalSpecialtyCount: any[] | any;

  totalHospitalsOfEachMunicipality: any[] | any;

  totalDoctorsInMunicipalitiesGroupedByGender: any[] | any;
  // card charts config and data for summarised directory data
  cardChartData: any[] | any;
  cardView: [number, number] = [400, 400];
  cardColor: string = '#232837';
  cardColorScheme: any = { domain: ['#5AA454', '#E44D25', '#CFC0BB'] };

  // doughnut chart config and data for specialties
  specialtyDoughnutChartData: any[] | any;
  specialtyDoughnutView: [number, number] = [400, 400];
  specialtyDoughnutColorScheme: any = {
    domain: [
      '#5AA454',
      '#A10A28',
      '#C7B42C',
      '#AAAAAA',
      '#CFC0BB',
      '#E44D25',
      '5AA454',
    ],
  };
  specialtyDoughnutGradient: boolean = true;
  specialtyDoughnutShowLegend: boolean = true;
  specialtyShowLabels: boolean = true;
  specialtyDoughnutIsDoughnut: boolean = false;

  // bar graph chart for total hospitals in municipality
  municipalityHospitalsGraphChartData: any[] | any;
  municipalityHospitalsView: [number, number] = [700, 400];
  municipalityHospitalsShowXAxis: boolean = true;
  municipalityHospitalsShowYAxis: boolean = true;
  municipalityHospitalsGradient: boolean = false;
  municipalityHospitalsShowLegend: boolean = true;
  municipalityHospitalsShowXAxisLabel: boolean = true;
  municipalityHospitalsXaxisLabel = 'Municipalities';
  municipalityHospitalsShowYAxisLabel: boolean = true;
  municipalityHospitalsYaxisLabel = 'Hospitals';

  municipalityHospitalsColorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  // bar graph chart for total doctors in municipality grouped by gender
  municipalityDoctorsGroupedByGenderGraphChartData: any[] | any;
  municipalityDoctorsGroupedByGenderView: [number, number] = [700, 400];
  municipalityDoctorsGroupedByGenderShowXAxis: boolean = true;
  municipalityDoctorsGroupedByGenderShowYAxis: boolean = true;
  municipalityDoctorsGroupedByGenderGradient: boolean = false;
  municipalityDoctorsGroupedByGenderShowLegend: boolean = true;
  municipalityDoctorsGroupedByGenderShowXAxisLabel: boolean = true;
  municipalityDoctorsGroupedByGenderxAxisLabel: string = 'Country';
  municipalityDoctorsGroupedByGendershowYAxisLabel: boolean = true;
  municipalityDoctorsGroupedByGenderyAxisLabel: string = 'Population';
  municipalityDoctorsGroupedByGenderAnimations: boolean = true;

  municipalityDoctorsGroupedByGenderColorScheme: any = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };

  constructor(
    private mainDirectoryStatsEndPointService: MainDirectoryStatsEndPointService,
    private mainDirectoryStatsAuxiliaryService: MainDirectoryStatsAuxiliaryService
  ) {}

  ngOnInit(): void {
    this.mainDirectoryStatsEndPointService
      .getMainDirectoryStats()
      .then((response) => {
        this.totalDoctors = response.totalDoctors;
        this.totalHospitals = response.totalHospitals;
        this.totalMunicipalities = response.totalMunicipalities;
        this.totalSpecialtyCount = response.totalDoctorsGroupedBySpecialty;
        this.totalHospitalsOfEachMunicipality =
          response.totalHospitalsOfEachMunicipality;
        this.totalDoctorsInMunicipalitiesGroupedByGender =
          response.totalGenderCountOfDoctorsInMunicipality;
        this.prepareCardChartData();
        this.prepareSpecialtyDataForDoughnut();
        this.prepareGraphDataForTotalMunicipalities();
        this.prepareGraphDataForTotalDoctorsInMunicipalityGroupedByGender();
      });
  }

  prepareCardChartData() {
    const preparedCardDisplayData = [];
    const preparedTotalDoctors =
      this.mainDirectoryStatsAuxiliaryService.formatDataForGraphDisplay(
        ViewSupportingModelTitles.Doctors,
        this.totalDoctors
      );
    const preparedTotalMunicipalities =
      this.mainDirectoryStatsAuxiliaryService.formatDataForGraphDisplay(
        ViewSupportingModelTitles.Municipalities,
        this.totalMunicipalities
      );
    const preparedTotalHospitals =
      this.mainDirectoryStatsAuxiliaryService.formatDataForGraphDisplay(
        ViewSupportingModelTitles.Hospitals,
        this.totalHospitals
      );

    preparedCardDisplayData.push(
      preparedTotalHospitals,
      preparedTotalMunicipalities,
      preparedTotalDoctors
    );

    this.cardChartData = preparedCardDisplayData;
  }

  prepareSpecialtyDataForDoughnut() {
    this.specialtyDoughnutChartData =
      this.mainDirectoryStatsAuxiliaryService.formatSpecialtyDataForDoughnutGraphDisplayData(
        this.totalSpecialtyCount
      );
  }

  prepareGraphDataForTotalMunicipalities() {
    this.municipalityHospitalsGraphChartData =
      this.mainDirectoryStatsAuxiliaryService.formatTotalHospitalMunicipalitesGraphDisplayData(
        this.totalHospitalsOfEachMunicipality
      );
  }

  prepareGraphDataForTotalDoctorsInMunicipalityGroupedByGender() {
    this.municipalityDoctorsGroupedByGenderGraphChartData =
      this.mainDirectoryStatsAuxiliaryService.formatTotalDoctorsInMunicipalitiesGroupedByGender(
        this.totalDoctorsInMunicipalitiesGroupedByGender
      );
  }
}
