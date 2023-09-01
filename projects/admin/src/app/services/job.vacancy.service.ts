import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { AllJobVacancyResDto } from "../dto/jobvacancy/all-job-vacancy.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";
import { InsertJobVacancyReqDto } from "../dto/jobvacancy/insert-job-vacancy.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";
import { JobVacancyUpdateReqDto } from "../dto/jobvacancy/job-vacancy-update.req.dto";
import { UpdateResDto } from "../dto/update.res.dto";
import { JobVacancyResDto } from "../dto/jobvacancy/job-vacancy.res.dto";

@Injectable({
    providedIn : 'root'
})
export class JobVacancyService{

    constructor(
        private base : BaseService
    ){}

    getJobVacancies() : Observable<AllJobVacancyResDto[]>{
        return this.base.get<AllJobVacancyResDto[]>(`${BASE_URL_ADMIN}/job-vacancies`)
    }

    addJobVacancy(request : InsertJobVacancyReqDto) : Observable<InsertResDto>{
        return this.base.post<InsertResDto>(`${BASE_URL_ADMIN}/job-vacancies`, request)
    }

    updateJobVacancy(request : JobVacancyUpdateReqDto) : Observable<UpdateResDto>{
        return this.base.put<UpdateResDto>(`${BASE_URL_ADMIN}/job-vacancies`, request)
    }

    getJobVacancy(jobVacancyId : number) : Observable<JobVacancyResDto>{        
        return this.base.get<JobVacancyResDto>(`${BASE_URL_ADMIN}/job-vacancies/${jobVacancyId}`)
    }
}