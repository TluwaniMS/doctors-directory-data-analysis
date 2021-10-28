import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalAnalysisComponent } from 'src/app/components/hospital-analysis/hospital-analysis.component';
import { MunicipalityAnalysisComponent } from 'src/app/components/municipality-analysis/municipality-analysis.component';
import { SpecialtyAnalysisComponent } from 'src/app/components/specialty-analysis/specialty-analysis.component';
import { MainDirectoryStatsAnalysisComponent } from 'src/app/components/main-directory-stats-analysis/main-directory-stats-analysis.component';

const routes: Routes = [
  {
    path: 'main-directory-stats-view',
    component: MainDirectoryStatsAnalysisComponent,
  },
  {
    path: 'hospital-stats-view/:hospitalKey',
    component: HospitalAnalysisComponent,
  },
  {
    path: 'municipality-stats-view/:municipalityKey',
    component: MunicipalityAnalysisComponent,
  },
  {
    path: 'specialty-stats-view/:specialtyKey',
    component: SpecialtyAnalysisComponent,
  },
  {
    path: '',
    redirectTo: '/main-directory-stats-view',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
