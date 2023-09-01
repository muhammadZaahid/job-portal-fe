import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { AuthService } from "@candidateServices/auth.service";
import { ApplicantService } from "@candidateServices/applicant.service";
import { ApplicantResDto } from "@candidateDto/applicant/applicant.res.dto";
import { Stage } from "../../../constants/stage.constan";

@Component({
    selector: 'application-list',
    templateUrl: './application-list.component.html'
})
export class ApplicationListComponent implements OnInit {

    items: MenuItem[] | undefined;
    applications: ApplicantResDto[] = []
    applicationsAssessment: ApplicantResDto[] = []
    applicationsInterview: ApplicantResDto[] = []
    applicationsMcu: ApplicantResDto[] = []
    applicationsOffer: ApplicantResDto[] = []
    applicationsHired: ApplicantResDto[] = []

    constructor(
        private authService: AuthService,
        private applicantService: ApplicantService
    ) { }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token        
        if (profile && token) {
            this.getApplications()
            this.getAplicationsOnAssessment()
            this.getAplicationsOnInterview()
            this.getAplicationsOnMcu()
            this.getAplicationsOnOffer()
            this.getAplicationsOnHired()
        }

    }

    getApplications() {
        this.applicantService.getApplications().subscribe(result => {
            this.applications = result
        })
    }

    getAplicationsOnAssessment(){
        this.applicantService.getApplicationByStage(Stage.ASSESSMENT).subscribe(result =>{
            this.applicationsAssessment = result
        })
    }

    getAplicationsOnInterview(){
        this.applicantService.getApplicationByStage(Stage.INTERVIEW).subscribe(result =>{
            this.applicationsInterview = result
        })
    }

    getAplicationsOnMcu(){
        this.applicantService.getApplicationByStage(Stage.MCU).subscribe(result =>{
            this.applicationsMcu = result
        })
    }

    getAplicationsOnOffer(){
        this.applicantService.getApplicationByStage(Stage.OFFER).subscribe(result =>{
            this.applicationsOffer = result
        })
    }

    getAplicationsOnHired(){
        this.applicantService.getApplicationByStage(Stage.HIRED).subscribe(result =>{
            this.applicationsHired = result
        })
    }

}