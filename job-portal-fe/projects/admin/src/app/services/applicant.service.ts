import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { ApplicantInsertReqDto } from "../dto/applicant/applicant-insert.req.dto";
import { Observable } from "rxjs";
import { InsertResDto } from "../dto/insert.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";
import { UpdateResDto } from "../dto/update.res.dto";
import { ApplicantsResDto } from "../dto/applicant/applicants.res.dto";

@Injectable({
    providedIn : 'root'
})
export class ApplicantService{
    
    constructor(
        private base : BaseService
    ){}

    insertApplicant<InsertResDto>(data : ApplicantInsertReqDto):Observable<InsertResDto>{
        return this.base.post(`${BASE_URL_ADMIN}/applicant`,data,true)
    }
    updateApplicant<UpdateResDto>(applicantId : String):Observable<UpdateResDto>{
        return this.base.patch(`${BASE_URL_ADMIN}/applicant/${applicantId}`,true)
    }

    getApplicants() : Observable<ApplicantsResDto[]>{
        return this.base.get<ApplicantsResDto[]>(`${BASE_URL_ADMIN}/applicant`,true)
    }
}
