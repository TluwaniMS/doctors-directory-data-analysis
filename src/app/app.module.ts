import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EndPointServices } from 'src/app/service-organiser/end-point-services';
import { AuxiliaryServices } from 'src/app/service-organiser/auxiliary-services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { NbSidebarModule } from '@nebular/theme';
import { NbMenuModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';
import { NbPopoverModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MunicipalityAnalysisComponent } from './components/municipality-analysis/municipality-analysis.component';
import { HospitalAnalysisComponent } from './components/hospital-analysis/hospital-analysis.component';
import { SpecialtyAnalysisComponent } from './components/specialty-analysis/specialty-analysis.component';
import { MainDirectoryStatsAnalysisComponent } from './components/main-directory-stats-analysis/main-directory-stats-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    MunicipalityAnalysisComponent,
    HospitalAnalysisComponent,
    SpecialtyAnalysisComponent,
    MainDirectoryStatsAnalysisComponent,
  ],
  imports: [
    NbPopoverModule,
    NbIconModule,
    NgxChartsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbSidebarModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbCardModule,
  ],
  providers: [...EndPointServices, ...AuxiliaryServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
