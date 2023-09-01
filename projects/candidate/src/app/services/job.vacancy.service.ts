import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { JobVacancyResDto } from "../dto/jobvacancy/job-vacancy.res.dto";
import { BASE_URL_CANDIDATE } from "../constants/api.constant";
import { JobVacancyDetailResDto } from "../dto/jobvacancy/job-vacancy-detail.res.dto";

@Injectable({
    providedIn : 'root'
})
export class JobVacancyService{

    constructor(
        private baseService : BaseService
    ){}

    getJobVacancies() : Observable<JobVacancyResDto[]> {
        return this.baseService.get<JobVacancyResDto[]>(`${BASE_URL_CANDIDATE}/job-vacancies`)
    }

    getJobVacancy(jobVacancyId : string) : Observable<JobVacancyDetailResDto>{
        return this.baseService.get<JobVacancyDetailResDto>(`${BASE_URL_CANDIDATE}/job-vacancies/${jobVacancyId}`)
    }
}