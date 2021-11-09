import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialtyStatsEndPointService } from 'src/app/services/end-point-services/specialty-end-point-service.service';
import { SharedStatsAuxiliaryService } from 'src/app/services/auxillary-services/shared-stats-auxiliary.service';
import { ViewSupportingModelTitles } from 'src/app/models/operational-support-models/view-supporting-model-titles.component';

@Component({
  selector: 'app-specialty-analysis',
  templateUrl: './specialty-analysis.component.html',
  styleUrls: ['./specialty-analysis.component.css'],
})
export class SpecialtyAnalysisComponent implements OnInit {
  specialtyKey: string | any;

  totalDoctors: any[] | any;

  // total doctors in specialty count card data chart config
  totalDoctorsCountInSpecialtyCardChartData: any[] | any;

  constructor(
    private route: ActivatedRoute,
    private specialtyStatsEndPointService: SpecialtyStatsEndPointService,
    private sharedStatsAuxiliaryService: SharedStatsAuxiliaryService
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
        this.prepareTotalDoctorsCountInSpecialtyChartData();
        console.log(this.totalDoctorsCountInSpecialtyCardChartData);
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
}
