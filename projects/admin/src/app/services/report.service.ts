import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { ApplicantReportPojo } from "../pojo/report/applicant-report.pojo";
import { BASE_URL_ADMIN } from "../constants/api.constant";

@Injectable({
    providedIn : 'root'
})
export class ReportService{

    constructor(
        private baseService : BaseService
    ){}

    getApplicantReport() : Observable<ApplicantReportPojo[]>{
        return this.baseService.get(`${BASE_URL_ADMIN}/report/applicant`)
    }
    getApplicantReportWithFilter(startDate : string, endDate : string) : Observable<ApplicantReportPojo[]>{
        return this.baseService.get(`${BASE_URL_ADMIN}/report/applicant?startDate=${startDate}&endDate=${endDate}`)
    }
}