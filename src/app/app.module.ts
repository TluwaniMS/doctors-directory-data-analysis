import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarModule } from '@nebular/theme';
import { MunicipalitiesAnalysisComponent } from './components/municipalities-analysis/municipalities-analysis.component';
import { DoctorsAnalysisComponent } from './components/doctors-analysis/doctors-analysis.component';
import { HospitalsAnalysisComponent } from './components/hospitals-analysis/hospitals-analysis.component';
import { SpecialtiesAnalysisComponent } from './components/specialties-analysis/specialties-analysis.component';
import { MunicipalityAnalysisComponent } from './components/municipality-analysis/municipality-analysis.component';
import { HospitalAnalysisComponent } from './components/hospital-analysis/hospital-analysis.component';
import { SpecialtyAnalysisComponent } from './components/specialty-analysis/specialty-analysis.component';

@NgModule({
  declarations: [AppComponent, MunicipalitiesAnalysisComponent, DoctorsAnalysisComponent, HospitalsAnalysisComponent, SpecialtiesAnalysisComponent, MunicipalityAnalysisComponent, HospitalAnalysisComponent, SpecialtyAnalysisComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
