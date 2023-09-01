import { Component, OnInit } from "@angular/core";
import { ApplicantReportPojo } from "../../../pojo/report/applicant-report.pojo";
import { ReportService } from "../../../services/report.service";
import { NonNullableFormBuilder } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'report-applicant',
    templateUrl: './report-applicant.component.html'
})

export class ReportApplicantComponent implements OnInit{
    startDate = ""
    endDate = ""
    
    subsApplicant! : Subscription

    applicantData : ApplicantReportPojo[] = []
    
    constructor(
        private reportService : ReportService,
        private authService : AuthService,
        private fb : NonNullableFormBuilder
    ){}

    ngOnInit(){
        const profile = this.authService.getProfile()
        const token = this.authService.getProfile()?.token
        if(profile && token){
            this.getApplicant()
        }
    }

    getApplicant(){
        this.subsApplicant = this.reportService.getApplicantReport().subscribe(result =>{
            this.applicantData = result
        })
    }
 
    getFiltered(){
        this.subsApplicant = this.reportService.getApplicantReportWithFilter(this.startDate,this.endDate).subscribe(result =>{
            this.applicantData = result
        })
    }

    formatDate(event: any): string {
        const toString = (date: number, padLength: number): string => {
            return date.toString().padStart(padLength, '0');
        };
    
        const formattedDate =
            toString(event.getFullYear(), 4) +
            '-' + toString(event.getMonth() + 1, 2) +
            '-' + toString(event.getDate(), 2);
    
        return formattedDate;
    }

    startDateWithoutTime(event: any) {
        const formattedDate = this.formatDate(event);
        this.startDate = formattedDate
    }
    endDateWithoutTime(event: any) {
        const formattedDate = this.formatDate(event);
        this.endDate = formattedDate
    }

    filterByDate(startDate : string, endDate : string){}

    ngOnDestroy(){
        this.subsApplicant.unsubscribe()
    }
}