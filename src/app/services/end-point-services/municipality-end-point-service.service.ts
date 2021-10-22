import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endPoints from 'src/assets/end-points.json';

@Injectable()
export class MunicipalityStatsEndPointService {
  constructor(private http: HttpClient) {}

  getMunicipalityStats(municipalityKey: string) {
    const url = endPoints.municipalityStatistics + municipalityKey;

    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: {},
    };

    return this.http.get(url, options).toPromise<any>();
  }
}
