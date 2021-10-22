import { HospitalStatsEndPointService } from 'src/app/services/end-point-services/hospital-end-point-service.service';
import { MainDirectoryStatsEndPointService } from 'src/app/services/end-point-services/main-directory-end-point-service.service';
import { MunicipalityStatsEndPointService } from 'src/app/services/end-point-services/municipality-end-point-service.service';
import { SpecialtyStatsEndPointService } from 'src/app/services/end-point-services/specialty-end-point-service.service';

export const EndPointServices = [
  HospitalStatsEndPointService,
  MainDirectoryStatsEndPointService,
  MunicipalityStatsEndPointService,
  SpecialtyStatsEndPointService,
];
