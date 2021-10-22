import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endPoints from 'src/assets/end-points.json';

@Injectable()
export class SpecialtyStatsEndPointService {
  constructor(private http: HttpClient) {}

  getSpecialyStats(specialtyKey: string) {
    const url = endPoints.specialtyStatistics + specialtyKey;

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: {},
    };

    return this.http.get(url, options).toPromise<any>();
  }
}
