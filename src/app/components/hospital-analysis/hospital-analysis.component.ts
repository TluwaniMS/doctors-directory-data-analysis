import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewSupportingModelTitles } from 'src/app/models/operational-support-models/view-supporting-model-titles.component';
import { MainDirectoryStatsAuxiliaryService } from 'src/app/services/auxillary-services/main-directory-stats-auxilary.service';
import { HospitalStatsAuxiliaryService } from 'src/app/services/auxillary-services/hospitals-stats-auxialry.service';
import { HospitalStatsEndPointService } from 'src/app/services/end-point-services/hospital-end-point-service.service';

@Component({
  selector: 'app-hospital-analysis',
  templateUrl: './hospital-analysis.component.html',
  styleUrls: ['./hospital-analysis.component.css'],
})
export class HospitalAnalysisComponent implements OnInit {
  hospitalKey: string | any;

  totalDoctors: any[] | any;
  totalGenderCount: any[] | any;

  // doctors card data chart config
  totalDoctorsCardChartData: any[] | any;

  // total doctors gender count doughnut data config /'
  totalGenderDoughnutChartData: any[] | any;

  constructor(
    private route: ActivatedRoute,
    private hospitalStatsEndPointService: HospitalStatsEndPointService,
    private mainDirectoryStatsAuxiliaryService: MainDirectoryStatsAuxiliaryService,
    private hospitalStatsAuxiliaryService: HospitalStatsAuxiliaryService
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
        this.prepareTotalDoctorsCardChartData();
        this.prepareDoughnutGenderChartData();
      });
  }

  prepareTotalDoctorsCardChartData() {
    const preparedCardData = [];
    const preparedTotalDoctors =
      this.mainDirectoryStatsAuxiliaryService.formatDataForGraphDisplay(
        ViewSupportingModelTitles.Doctors,
        this.totalDoctors
      );

    preparedCardData.push(preparedTotalDoctors);

    this.totalDoctorsCardChartData = preparedCardData;
  }

  prepareDoughnutGenderChartData() {
    this.totalGenderDoughnutChartData =
      this.hospitalStatsAuxiliaryService.formatGenderCountDoughnutChartData(
        this.totalGenderCount
      );
  }
}
