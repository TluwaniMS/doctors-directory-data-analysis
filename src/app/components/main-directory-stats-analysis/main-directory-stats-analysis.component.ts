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
  // card charts config and data
  cardChartData: any[] = [];
  totalDoctors: Totals | any;
  totalMunicipalities: Totals | any;
  totalHospitals: Totals | any;

  single: any[] | any;
  view: [number, number] = [700, 400];

  cardColor: string = '#232837';
  colorScheme: any = { domain: ['#5AA454', '#E44D25', '#CFC0BB'] };

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
        this.prepareCardChartData();
      });
  }

  prepareCardChartData() {
    const preparedTotalDoctors =
      this.mainDirectoryStatsAuxiliaryService.formatDataForCardDataDisplay(
        ViewSupportingModelTitles.Doctors,
        this.totalDoctors
      );
    const preparedTotalMunicipalities =
      this.mainDirectoryStatsAuxiliaryService.formatDataForCardDataDisplay(
        ViewSupportingModelTitles.Municipalities,
        this.totalMunicipalities
      );
    const preparedTotalHospitals =
      this.mainDirectoryStatsAuxiliaryService.formatDataForCardDataDisplay(
        ViewSupportingModelTitles.Hospitals,
        this.totalHospitals
      );

    this.cardChartData.push(
      preparedTotalHospitals,
      preparedTotalMunicipalities,
      preparedTotalDoctors
    );
  }
}
