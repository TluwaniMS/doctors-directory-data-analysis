import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import endPoints from 'src/assets/end-points.json';

@Injectable()
export class MunicipalityStatsEndPointService {
  constructor(private http: HttpClient) {}
}
