import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSidebarModule } from '@nebular/theme';
import { MunicipalityAnalysisComponent } from './components/municipality-analysis/municipality-analysis.component';
import { HospitalAnalysisComponent } from './components/hospital-analysis/hospital-analysis.component';
import { SpecialtyAnalysisComponent } from './components/specialty-analysis/specialty-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    MunicipalityAnalysisComponent,
    HospitalAnalysisComponent,
    SpecialtyAnalysisComponent,
  ],
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
