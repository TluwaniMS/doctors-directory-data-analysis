import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipalityStatsEndPointService } from 'src/app/services/end-point-services/municipality-end-point-service.service';

@Component({
  selector: 'app-municipality-analysis',
  templateUrl: './municipality-analysis.component.html',
  styleUrls: ['./municipality-analysis.component.css'],
})
export class MunicipalityAnalysisComponent implements OnInit {
  municipalityKey: string | any;
  constructor(
    private route: ActivatedRoute,
    private municipalityStatsEndPointService: MunicipalityStatsEndPointService
  ) {}

  ngOnInit(): void {
    this.municipalityKey = this.route.snapshot.paramMap.get('municipalityKey');
    this.getMunicipalityStats(this.municipalityKey);
  }

  getMunicipalityStats(municipalityKey: string) {
    this.municipalityStatsEndPointService
      .getMunicipalityStats(municipalityKey)
      .then((response) => {
        console.log(response);
      });
  }
}
