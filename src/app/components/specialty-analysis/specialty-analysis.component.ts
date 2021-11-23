import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialtyStatsEndPointService } from 'src/app/services/end-point-services/specialty-end-point-service.service';
import { SharedStatsAuxiliaryService } from 'src/app/services/auxillary-services/shared-stats-auxiliary.service';
import { ViewSupportingModelTitles } from 'src/app/models/operational-support-models/view-supporting-model-titles.component';
import { SpecialtyStatsAuxiliaryService } from 'src/app/services/auxillary-services/specialty-stats-auxiliary.service';

@Component({
  selector: 'app-specialty-analysis',
  templateUrl: './specialty-analysis.component.html',
  styleUrls: ['./specialty-analysis.component.css'],
})
export class SpecialtyAnalysisComponent implements OnInit {
  specialtyKey: string | any;

  totalDoctors: any[] | any;
  totalDoctorsGroupedByGender: any[] | any;
  totalSpecialtyCountForHospitalsGroupedByGender: any[] | any;
  totalSpecialtyCountForMunicipalitiesGroupedByGender: any[] | any;

  // total doctors in specialty count card data chart config
  totalDoctorsCountInSpecialtyCardChartData: any[] | any;
  cardColor: string = '#232837';
  cardColorScheme: any = { domain: ['#242582', '#557A95', '#66FCF1'] };

  // total doctors in specialty count grouped by gender data doughnut chart config
  totalDoctorsCountInSpecialtyGroupedByGenderChartData: any[] | any;
  specialtyDoughnutColorScheme: any = {
    domain: ['#802BB1', '#1E4258'],
  };
  specialtyDoughnutGradient: boolean = true;

  // shared double bar graph data configuration
  doubleBarGraphShowXAxis: boolean = true;
  doubleBarGraphShowYAxis: boolean = true;
  doubleBarGraphGradient: boolean = false;
  doubleBarGraphShowLegend: boolean = true;
  doubleBarGraphShowXAxisLabel: boolean = true;
  doubleBarGraphshowYAxisLabel: boolean = true;
  doubleBarGraphyAxisLabel: string = 'Doctors';
  doubleBarGraphAnimations: boolean = true;
  doubleBarGraphColorScheme: any = {
    domain: ['#8590AA', '#4C495D'],
  };

  // total doctors in specialty found in hospital grouped by gender
  totalDoctorsCountInHospitalGroupedBySpecialtyAndGenderChartData: any[] | any;
  doubleBarGraphHospitalsxAxisLabel: string = 'Hospitals ';

  //total doctors in specialty found in municiaplity grouped by gender
  totalDoctorsCountInMunicipalityGroupedBySpecialtyAndGenderChartData:
    | any[]
    | any;
  doubleBarGraphMunicipalitiesxAxisLabel: string = 'Municipalities';

  constructor(
    private route: ActivatedRoute,
    private specialtyStatsEndPointService: SpecialtyStatsEndPointService,
    private sharedStatsAuxiliaryService: SharedStatsAuxiliaryService,
    private specialtyStatsAuxiliaryService: SpecialtyStatsAuxiliaryService
  ) {}

  ngOnInit(): void {
    this.specialtyKey = this.route.snapshot.paramMap.get('specialtyKey');
    this.getSPecialtyStats(this.specialtyKey);
  }

  getSPecialtyStats(specialtyKey: string) {
    this.specialtyStatsEndPointService
      .getSpecialyStats(specialtyKey)
      .then((response) => {
        this.totalDoctors = response.totalSpecialtyCount;
        this.totalDoctorsGroupedByGender =
          response.specialtyCountGroupedByGender;
        this.totalSpecialtyCountForHospitalsGroupedByGender =
          response.specialtyCountGroupedByGenderForHospitals;
        this.totalSpecialtyCountForMunicipalitiesGroupedByGender =
          response.specialtyCountGroupedByGenderForMunicipalities;
        this.prepareTotalDoctorsCountInSpecialtyChartData();
        this.prepareTotalDoctorsCountInSpecialtyGroupedByGenderDoughnutChartData();
        this.prepareTotalSpecialtyCountInHospitalsGroupedByGenderGraphDisplayData();
        this.prepareTotalSpecialtyCountInMunicipalitiesGroupedByGenderGraphDisplayData();
      });
  }

  prepareTotalDoctorsCountInSpecialtyChartData() {
    const preparedtotalDoctorsCountInSpecialty = [];

    const preparedData =
      this.sharedStatsAuxiliaryService.formatDataForGraphDisplay(
        ViewSupportingModelTitles.Doctors,
        this.totalDoctors
      );

    preparedtotalDoctorsCountInSpecialty.push(preparedData);

    this.totalDoctorsCountInSpecialtyCardChartData =
      preparedtotalDoctorsCountInSpecialty;
  }

  prepareTotalDoctorsCountInSpecialtyGroupedByGenderDoughnutChartData() {
    this.totalDoctorsCountInSpecialtyGroupedByGenderChartData =
      this.sharedStatsAuxiliaryService.formatGenderCountDoughnutChartData(
        this.totalDoctorsGroupedByGender
      );
  }

  prepareTotalSpecialtyCountInHospitalsGroupedByGenderGraphDisplayData() {
    this.totalDoctorsCountInHospitalGroupedBySpecialtyAndGenderChartData =
      this.specialtyStatsAuxiliaryService.formatSpecialtyCountInHospitalsGroupedByGenderGraphDisplayData(
        this.totalSpecialtyCountForHospitalsGroupedByGender
      );
  }

  prepareTotalSpecialtyCountInMunicipalitiesGroupedByGenderGraphDisplayData() {
    this.totalDoctorsCountInMunicipalityGroupedBySpecialtyAndGenderChartData =
      this.sharedStatsAuxiliaryService.formatTotalDoctorsInMunicipalitiesGroupedByGender(
        this.totalSpecialtyCountForMunicipalitiesGroupedByGender
      );
  }
}
