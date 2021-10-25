import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalAnalysisComponent } from 'src/app/components/hospital-analysis/hospital-analysis.component';
import { MunicipalityAnalysisComponent } from 'src/app/components/municipality-analysis/municipality-analysis.component';
import { SpecialtyAnalysisComponent } from 'src/app/components/specialty-analysis/specialty-analysis.component';

const routes: Routes = [
  {
    path: 'hospital-stats-view/:hospital-key',
    component: HospitalAnalysisComponent,
  },
  {
    path: 'municipality-stats-view/:municipality-key',
    component: MunicipalityAnalysisComponent,
  },
  {
    path: 'specialty-stats-view/:specialty-key',
    component: SpecialtyAnalysisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
