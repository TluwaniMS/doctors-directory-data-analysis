import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endPoints from 'src/assets/end-points.json';

@Injectable()
export class HospitalStatsEndPointService {
  constructor(private http: HttpClient) {}

  getHospitalStats(hospitalKey: string) {
    const url = endPoints.hospitalStatistics + hospitalKey;

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: {},
    };

    return this.http.get(url, options).toPromise<any>();
  }
}
