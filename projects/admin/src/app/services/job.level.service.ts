import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { JobLevelResDto } from "../dto/joblevel/job-level.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";

@Injectable({
    providedIn: 'root'
})
export class JobLevelService {

    constructor(
        private baseService: BaseService
    ) { }

    getJobLevels(): Observable<JobLevelResDto[]> {
        return this.baseService.get<JobLevelResDto[]>(`${BASE_URL_ADMIN}/job-level`)
    }
}