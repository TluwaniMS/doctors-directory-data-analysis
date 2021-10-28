import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-municipality-analysis',
  templateUrl: './municipality-analysis.component.html',
  styleUrls: ['./municipality-analysis.component.css'],
})
export class MunicipalityAnalysisComponent implements OnInit {
  municipalityKey: string | any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.municipalityKey = this.route.snapshot.paramMap.get('municipalityKey');
    console.log(this.municipalityKey);
  }
}
