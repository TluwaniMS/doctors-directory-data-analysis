import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialtyStatsEndPointService } from 'src/app/services/end-point-services/specialty-end-point-service.service';

@Component({
  selector: 'app-specialty-analysis',
  templateUrl: './specialty-analysis.component.html',
  styleUrls: ['./specialty-analysis.component.css'],
})
export class SpecialtyAnalysisComponent implements OnInit {
  specialtyKey: string | any;
  constructor(
    private route: ActivatedRoute,
    private specialtyStatsEndPointService: SpecialtyStatsEndPointService
  ) {}

  ngOnInit(): void {
    this.specialtyKey = this.route.snapshot.paramMap.get('specialtyKey');
    console.log(this.specialtyKey);
  }
}
