import { MainDirectoryStatsAuxiliaryService } from 'src/app/services/auxillary-services/main-directory-stats-auxilary.service';
import { MunicipalityStatsAuxiliaryService } from 'src/app/services/auxillary-services/municipality-stats-auxiliary.service';
import { HospitalStatsAuxiliaryService } from 'src/app/services/auxillary-services/hospitals-stats-auxialry.service';
import { SharedStatsAuxiliaryService } from 'src/app/services/auxillary-services/shared-stats-auxiliary.service';
import { SpecialtyStatsAuxiliaryService } from 'src/app/services/auxillary-services/specialty-stats-auxiliary.service';

export const AuxiliaryServices = [
  MainDirectoryStatsAuxiliaryService,
  MunicipalityStatsAuxiliaryService,
  HospitalStatsAuxiliaryService,
  SharedStatsAuxiliaryService,
  SpecialtyStatsAuxiliaryService,
];
