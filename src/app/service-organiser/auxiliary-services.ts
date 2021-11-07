import { MainDirectoryStatsAuxiliaryService } from 'src/app/services/auxillary-services/main-directory-stats-auxilary.service';
import { MunicipalityStatsAuxiliaryService } from 'src/app/services/auxillary-services/municipality-stats-auxiliary.service';
import { HospitalStatsAuxiliaryService } from 'src/app/services/auxillary-services/hospitals-stats-auxialry.service';

export const AuxiliaryServices = [
  MainDirectoryStatsAuxiliaryService,
  MunicipalityStatsAuxiliaryService,
  HospitalStatsAuxiliaryService,
];
