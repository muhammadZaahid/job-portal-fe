import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { CountResDto } from "../dto/count.res.dto";
import { BASE_URL_CANDIDATE } from "projects/candidate/src/app/constants/api.constant";
import { BASE_URL_ADMIN } from "../constants/api.constant";

@Injectable({
    providedIn : 'root'
})
export class DashboardService{
    
    constructor(
        private baseService : BaseService 
    ){}

    getTotalCandidate () : Observable<CountResDto>{
        return this.baseService.get<CountResDto>(`${BASE_URL_ADMIN}/candidate/count`)
    }

    getTotalApplicant () : Observable<CountResDto>{
        return this.baseService.get<CountResDto>(`${BASE_URL_ADMIN}/applicant/count`)
    }

    getTotalCompany () : Observable<CountResDto>{
        return this.baseService.get<CountResDto>(`${BASE_URL_ADMIN}/company/count`)
    }

    getTotalJobVacancy () : Observable<CountResDto>{
        return this.baseService.get<CountResDto>(`${BASE_URL_ADMIN}/job-vacancies/count`)
    }

    getTotalUser () : Observable<CountResDto>{
        return this.baseService.get<CountResDto>(`${BASE_URL_ADMIN}/users/count`)
    }    
}