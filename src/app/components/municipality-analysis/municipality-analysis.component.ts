import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipalityStatsEndPointService } from 'src/app/services/end-point-services/municipality-end-point-service.service';
import { MunicipalityStatsAuxiliaryService } from 'src/app/services/auxillary-services/municipality-stats-auxiliary.service';
import { ViewSupportingModelTitles } from 'src/app/models/operational-support-models/view-supporting-model-titles.component';

@Component({
  selector: 'app-municipality-analysis',
  templateUrl: './municipality-analysis.component.html',
  styleUrls: ['./municipality-analysis.component.css'],
})
export class MunicipalityAnalysisComponent implements OnInit {
  municipalityKey: string | any;

  totalDoctorsInMunicipality: any[] | any;

  // card chart data config
  cardChartData: any[] | any;
  constructor(
    private route: ActivatedRoute,
    private municipalityStatsEndPointService: MunicipalityStatsEndPointService,
    private municipalityStatsAuxiliaryService: MunicipalityStatsAuxiliaryService
  ) {}

  ngOnInit(): void {
    this.municipalityKey = this.route.snapshot.paramMap.get('municipalityKey');
    this.getMunicipalityStats(this.municipalityKey);
  }

  getMunicipalityStats(municipalityKey: string) {
    this.municipalityStatsEndPointService
      .getMunicipalityStats(municipalityKey)
      .then((response) => {
        this.totalDoctorsInMunicipality =
          response.totalDoctorCountInMunicipality;
        this.prepareNumberChartData();
      });
  }

  prepareNumberChartData() {
    const preparedCardData =
      this.municipalityStatsAuxiliaryService.formatGraphDisplayData(
        ViewSupportingModelTitles.Doctors,
        this.totalDoctorsInMunicipality[0].totalDoctors
      );

    this.cardChartData = [preparedCardData];
  }
}
