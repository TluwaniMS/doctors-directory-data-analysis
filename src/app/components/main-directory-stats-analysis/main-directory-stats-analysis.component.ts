import { Component, OnInit } from '@angular/core';
import { MainDirectoryStatsEndPointService } from 'src/app/services/end-point-services/main-directory-end-point-service.service';
import { Totals } from 'src/app/models/interfaces/total-property-interface';
import { MainDirectoryStatsAuxiliaryService } from 'src/app/services/auxillary-services/main-directory-stats-auxilary.service';
import { ViewSupportingModelTitles } from 'src/app/models/operational-support-models/view-supporting-model-titles.component';
import { SharedStatsAuxiliaryService } from 'src/app/services/auxillary-services/shared-stats-auxiliary.service';

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
  cardColorScheme: any = { domain: ['#242582', '#557A95', '#66FCF1'] };

  // doughnut chart config and data for specialties
  specialtyDoughnutChartData: any[] | any;
  specialtyDoughnutView: [number, number] = [400, 400];
  specialtyDoughnutColorScheme: any = {
    domain: [
      '#802BB1',
      '#1E4258',
      '#501F3A',
      '#29648A',
      '#C34271',
      '#33266E',
      '#0677A1',
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
    domain: ['#802BB1', '#1E4258', '#501F3A', '#29648A', '#33266E'],
  };

  // bar graph chart for total doctors in municipality grouped by gender
  municipalityDoctorsGroupedByGenderGraphChartData: any[] | any;
  municipalityDoctorsGroupedByGenderView: [number, number] = [700, 400];
  municipalityDoctorsGroupedByGenderShowXAxis: boolean = true;
  municipalityDoctorsGroupedByGenderShowYAxis: boolean = true;
  municipalityDoctorsGroupedByGenderGradient: boolean = false;
  municipalityDoctorsGroupedByGenderShowLegend: boolean = true;
  municipalityDoctorsGroupedByGenderShowXAxisLabel: boolean = true;
  municipalityDoctorsGroupedByGenderxAxisLabel: string = 'Municipalities';
  municipalityDoctorsGroupedByGendershowYAxisLabel: boolean = true;
  municipalityDoctorsGroupedByGenderyAxisLabel: string = 'Doctors';
  municipalityDoctorsGroupedByGenderAnimations: boolean = true;

  municipalityDoctorsGroupedByGenderColorScheme: any = {
    domain: ['#8590AA', '#4C495D'],
  };

  constructor(
    private mainDirectoryStatsEndPointService: MainDirectoryStatsEndPointService,
    private mainDirectoryStatsAuxiliaryService: MainDirectoryStatsAuxiliaryService,
    private sharedStatsAuxiliaryService: SharedStatsAuxiliaryService
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
      this.sharedStatsAuxiliaryService.formatDataForGraphDisplay(
        ViewSupportingModelTitles.Doctors,
        this.totalDoctors
      );
    const preparedTotalMunicipalities =
      this.sharedStatsAuxiliaryService.formatDataForGraphDisplay(
        ViewSupportingModelTitles.Municipalities,
        this.totalMunicipalities
      );
    const preparedTotalHospitals =
      this.sharedStatsAuxiliaryService.formatDataForGraphDisplay(
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
      this.sharedStatsAuxiliaryService.formatTotalDoctorsInMunicipalitiesGroupedByGender(
        this.totalDoctorsInMunicipalitiesGroupedByGender
      );
  }
}
