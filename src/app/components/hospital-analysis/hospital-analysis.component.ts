import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewSupportingModelTitles } from 'src/app/models/operational-support-models/view-supporting-model-titles.component';
import { MainDirectoryStatsAuxiliaryService } from 'src/app/services/auxillary-services/main-directory-stats-auxilary.service';
import { HospitalStatsAuxiliaryService } from 'src/app/services/auxillary-services/hospitals-stats-auxialry.service';
import { HospitalStatsEndPointService } from 'src/app/services/end-point-services/hospital-end-point-service.service';
import { SharedStatsAuxiliaryService } from 'src/app/services/auxillary-services/shared-stats-auxiliary.service';

@Component({
  selector: 'app-hospital-analysis',
  templateUrl: './hospital-analysis.component.html',
  styleUrls: ['./hospital-analysis.component.css'],
})
export class HospitalAnalysisComponent implements OnInit {
  hospitalKey: string | any;

  totalDoctors: any[] | any;
  totalGenderCount: any[] | any;
  totalSpecialtyCount: any[] | any;
  totalSpecialtyCountGroupedByGender: any[] | any;

  // doctors card data chart config
  totalDoctorsCardChartData: any[] | any;
  cardColor: string = '#232837';
  cardColorScheme: any = { domain: ['#242582', '#557A95', '#66FCF1'] };

  // shared doughnut chart data config
  doughnutGradient: boolean = true;

  // total doctors gender count doughnut data config
  totalGenderDoughnutChartData: any[] | any;
  genderDoughnutColorScheme: any = {
    domain: ['#802BB1', '#1E4258'],
  };

  // specialty count doughnut comparison doughnut data config
  totalSpecialtyDoughnutChartData: any[] | any;
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

  //specialty count grouped by gender doubloe bar graph config
  totalSpecialtyCountGroupedByGenderChartData: any[] | any;

  constructor(
    private route: ActivatedRoute,
    private hospitalStatsEndPointService: HospitalStatsEndPointService,
    private mainDirectoryStatsAuxiliaryService: MainDirectoryStatsAuxiliaryService,
    private hospitalStatsAuxiliaryService: HospitalStatsAuxiliaryService,
    private sharedStatsAuxiliaryService: SharedStatsAuxiliaryService
  ) {}

  ngOnInit(): void {
    this.hospitalKey = this.route.snapshot.paramMap.get('hospitalKey');
    this.getHospitalStats(this.hospitalKey);
  }

  getHospitalStats(hospitalKey: string) {
    this.hospitalStatsEndPointService
      .getHospitalStats(hospitalKey)
      .then((response) => {
        this.totalDoctors = response.doctorsCount;
        this.totalGenderCount = response.genderCount;
        this.totalSpecialtyCount = response.specialtyCount;
        this.totalSpecialtyCountGroupedByGender =
          response.specialtyCountGroupedByGender;
        this.prepareTotalDoctorsCardChartData();
        this.prepareDoughnutGenderChartData();
        this.prepareSpecialtyDoughnutChartData();
        this.prepareSpecialtyCountGroupedByGenderChartData();
      });
  }

  prepareTotalDoctorsCardChartData() {
    const preparedCardData = [];
    const preparedTotalDoctors =
      this.sharedStatsAuxiliaryService.formatDataForGraphDisplay(
        ViewSupportingModelTitles.Doctors,
        this.totalDoctors
      );

    preparedCardData.push(preparedTotalDoctors);

    this.totalDoctorsCardChartData = preparedCardData;
  }

  prepareDoughnutGenderChartData() {
    this.totalGenderDoughnutChartData =
      this.sharedStatsAuxiliaryService.formatGenderCountDoughnutChartData(
        this.totalGenderCount
      );
  }

  prepareSpecialtyDoughnutChartData() {
    this.totalSpecialtyDoughnutChartData =
      this.mainDirectoryStatsAuxiliaryService.formatSpecialtyDataForDoughnutGraphDisplayData(
        this.totalSpecialtyCount
      );
  }

  prepareSpecialtyCountGroupedByGenderChartData() {
    this.totalSpecialtyCountGroupedByGenderChartData =
      this.hospitalStatsAuxiliaryService.formatTotalSpecialisationCountGroupedByGender(
        this.totalSpecialtyCountGroupedByGender
      );
  }
}
