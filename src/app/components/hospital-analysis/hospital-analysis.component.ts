import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private route: ActivatedRoute,
    private hospitalStatsEndPointService: HospitalStatsEndPointService
  ) {}

  ngOnInit(): void {
    this.hospitalKey = this.route.snapshot.paramMap.get('hospitalKey');
    this.getHospitalStats(this.hospitalKey);
  }

  getHospitalStats(hospitalKey: string) {
    this.hospitalStatsEndPointService
      .getHospitalStats(hospitalKey)
      .then((response) => {
        console.log(response);
        this.totalDoctors = response.doctorsCount;
        this.totalGenderCount = response.genderCount;
      });
  }

  prepareTotalDoctorsCardChartData() {}

  prepareDoughnutGenderChartData() {}
}
