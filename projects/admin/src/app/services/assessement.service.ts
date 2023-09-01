import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { AssessmentResDto } from "../dto/assessement/assessment.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";

@Injectable({
    providedIn : 'root'
})
export class AssessementService{

    constructor(
        private baseService : BaseService
    ){}

    getAssessment(applicantId : string) : Observable<AssessmentResDto>{
        return this.baseService.get<AssessmentResDto>(`${BASE_URL_ADMIN}/assessment/${applicantId}`)
    }
}