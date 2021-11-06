import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MunicipalityStatsEndPointService } from 'src/app/services/end-point-services/municipality-end-point-service.service';
import { MunicipalityStatsAuxiliaryService } from 'src/app/services/auxillary-services/municipality-stats-auxiliary.service';
import { ViewSupportingModelTitles } from 'src/app/models/operational-support-models/view-supporting-model-titles.component';
import { MainDirectoryStatsAuxiliaryService } from 'src/app/services/auxillary-services/main-directory-stats-auxilary.service';

@Component({
  selector: 'app-municipality-analysis',
  templateUrl: './municipality-analysis.component.html',
  styleUrls: ['./municipality-analysis.component.css'],
})
export class MunicipalityAnalysisComponent implements OnInit {
  municipalityKey: string | any;

  totalDoctorsInMunicipality: any[] | any;
  totalDoctorsInMunicipalityGroupedByGender: any[] | any;
  totalSpecialtyCountInMunicipality: any[] | any;
  totalHospitalCountInMunicipality: any[] | any;
  totalDoctorsInHospital: any[] | any;

  // card chart data config
  cardChartData: any[] | any;

  // doughnut chart data for gender count config
  genderDoughnutChartData: any[] | any;

  // doughnut chart data for specialty count config
  specialtyDoughnutChartData: any[] | any;

  // bar graph chart for hospital doxtors count config
  totalDoctorsInHospitalChartData: any[] | any;
  constructor(
    private route: ActivatedRoute,
    private municipalityStatsEndPointService: MunicipalityStatsEndPointService,
    private municipalityStatsAuxiliaryService: MunicipalityStatsAuxiliaryService,
    private mainDirectoryStatsAuxiliaryService: MainDirectoryStatsAuxiliaryService
  ) {}

  ngOnInit(): void {
    this.municipalityKey = this.route.snapshot.paramMap.get('municipalityKey');
    this.getMunicipalityStats(this.municipalityKey);
  }

  getMunicipalityStats(municipalityKey: string) {
    this.municipalityStatsEndPointService
      .getMunicipalityStats(municipalityKey)
      .then((response) => {
        this.totalDoctorsInMunicipality =
          response.totalDoctorCountInMunicipality;
        this.totalDoctorsInMunicipalityGroupedByGender =
          response.totalGenderCountInMunicipality;
        this.totalSpecialtyCountInMunicipality =
          response.totalSpecialtyCountInMunicipality[0].specialties;
        this.totalHospitalCountInMunicipality =
          response.totalHospitalsInMunicipality[0];
        this.totalDoctorsInHospital =
          response.doctorsCountForHospitalsInMunicipality;
        this.prepareDoctorsCountChartData();
        this.prepareGenderDoughnutChartData();
        this.prepareSpecialtyDoughnutChartData();
        this.prepareDoctorsCountInHospitalsChartData();
      });
  }

  prepareDoctorsCountChartData() {
    const preparedDoctorsCardData =
      this.municipalityStatsAuxiliaryService.formatGraphDisplayData(
        ViewSupportingModelTitles.Doctors,
        this.totalDoctorsInMunicipality[0].totalDoctors
      );

    const preparedHospitalsCardData =
      this.municipalityStatsAuxiliaryService.formatGraphDisplayData(
        ViewSupportingModelTitles.Hospitals,
        this.totalHospitalCountInMunicipality.totalHospitals
      );

    this.cardChartData = [preparedDoctorsCardData, preparedHospitalsCardData];
  }

  prepareGenderDoughnutChartData() {
    this.genderDoughnutChartData =
      this.municipalityStatsAuxiliaryService.formatGenderDataForDoughnutGraphDisplay(
        this.totalDoctorsInMunicipalityGroupedByGender
      );
  }

  prepareSpecialtyDoughnutChartData() {
    this.specialtyDoughnutChartData =
      this.mainDirectoryStatsAuxiliaryService.formatSpecialtyDataForDoughnutGraphDisplayData(
        this.totalSpecialtyCountInMunicipality
      );
  }

  prepareDoctorsCountInHospitalsChartData() {
    this.totalDoctorsInHospitalChartData =
      this.municipalityStatsAuxiliaryService.formatDoctorsCountInHospitals(
        this.totalDoctorsInHospital
      );
  }
}
