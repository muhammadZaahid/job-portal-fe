import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { BASE_URL_CANDIDATE } from "../constants/api.constant";
import { QuestionsResDto } from "../dto/question/question.res.dto";
import { QuestionSubmitAssessmentReqDto } from "../dto/question/question-submit-assessment.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";

@Injectable({
    providedIn : 'root'
})
export class QuestionService{

    constructor(
        private baseService : BaseService
    ){}

    getQuestions(topicId : string, candidateId : string, jobVacancyId : string) : Observable<QuestionsResDto[]>{
        return this.baseService.get<QuestionsResDto[]>(`${BASE_URL_CANDIDATE}/questions/${topicId}/${candidateId}/${jobVacancyId}`)
    }

    submitAssessment(request : QuestionSubmitAssessmentReqDto) : Observable<InsertResDto>{        
        return this.baseService.post<InsertResDto>(`${BASE_URL_CANDIDATE}/questions/answer`, request)
    }
}