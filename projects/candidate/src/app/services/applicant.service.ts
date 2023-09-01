import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { ApplicantInsertReqDto } from "../dto/applicant/applicant-insert.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";
import { Observable } from "rxjs";
import { BASE_URL_CANDIDATE } from "../constants/api.constant";
import { ApplicantResDto } from "../dto/applicant/applicant.res.dto";

@Injectable({
    providedIn : 'root'
})
export class ApplicantService{

    constructor(
        private baseService : BaseService
    ){}

    applyJob(request : ApplicantInsertReqDto) : Observable<InsertResDto>{
       return this.baseService.post<InsertResDto>(`${BASE_URL_CANDIDATE}/applicant`, request)
    }

    getApplications() : Observable<ApplicantResDto[]>{
        return this.baseService.get<ApplicantResDto[]>(`${BASE_URL_CANDIDATE}/applicant`)
    }

    getApplicationByStage(currStage : string) : Observable<ApplicantResDto[]>{
        return this.baseService.get<ApplicantResDto[]>(`${BASE_URL_CANDIDATE}/applicant?currStage=${currStage}`)
    }
}