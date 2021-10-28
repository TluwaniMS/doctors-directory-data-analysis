import { Component, OnInit } from '@angular/core';
import { MainDirectoryStatsEndPointService } from 'src/app/services/end-point-services/main-directory-end-point-service.service';

@Component({
  selector: 'app-main-directory-stats-analysis',
  templateUrl: './main-directory-stats-analysis.component.html',
  styleUrls: ['./main-directory-stats-analysis.component.css'],
})
export class MainDirectoryStatsAnalysisComponent implements OnInit {
  constructor(
    private mainDirectoryStatsEndPointService: MainDirectoryStatsEndPointService
  ) {}

  ngOnInit(): void {
    this.mainDirectoryStatsEndPointService
      .getMainDirectoryStats()
      .then((response) => {
        console.log(response);
      });
  }
}
