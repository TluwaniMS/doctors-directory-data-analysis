import { Component, OnInit } from '@angular/core';
import { MainDirectoryStatsEndPointService } from 'src/app/services/end-point-services/main-directory-end-point-service.service';
import { Totals } from 'src/app/models/interfaces/total-property-interface';

@Component({
  selector: 'app-main-directory-stats-analysis',
  templateUrl: './main-directory-stats-analysis.component.html',
  styleUrls: ['./main-directory-stats-analysis.component.css'],
})
export class MainDirectoryStatsAnalysisComponent implements OnInit {
  // card charts config and data
  cardChartData: any[] | any;
  totalDoctors: Totals | any;
  totalMunicipalities: Totals | any;
  totalHospitals: Totals | any;

  single: any[] | any;
  view: any[] = [700, 400];

  cardColor: string = '#232837';
  colorScheme = { domain: ['#5AA454', '#E44D25', '#CFC0BB'] };

  constructor(
    private mainDirectoryStatsEndPointService: MainDirectoryStatsEndPointService
  ) {}

  ngOnInit(): void {
    this.mainDirectoryStatsEndPointService
      .getMainDirectoryStats()
      .then((response) => {
        this.totalDoctors = response;
        this.totalHospitals = response;
        this.totalMunicipalities = response;
      });
  }

  prepareCardChartData(){
    const preparedTotalDoctors = this
    const preparedTotalMunicipalities = this
    const preparedTotalHospitals = this
  }
}
