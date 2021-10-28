import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specialty-analysis',
  templateUrl: './specialty-analysis.component.html',
  styleUrls: ['./specialty-analysis.component.css'],
})
export class SpecialtyAnalysisComponent implements OnInit {
  specialtyKey: string | any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.specialtyKey = this.route.snapshot.paramMap.get('municipalityKey');
    console.log(this.specialtyKey);
  }
}
