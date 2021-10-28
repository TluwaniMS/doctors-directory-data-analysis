import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospital-analysis',
  templateUrl: './hospital-analysis.component.html',
  styleUrls: ['./hospital-analysis.component.css'],
})
export class HospitalAnalysisComponent implements OnInit {
  hospitalKey: string | any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.hospitalKey = this.route.snapshot.paramMap.get('hospitalKey');
    console.log(this.hospitalKey);
  }
}
