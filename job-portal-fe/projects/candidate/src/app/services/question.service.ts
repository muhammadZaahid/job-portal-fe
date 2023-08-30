import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { BASE_URL_CANDIDATE } from "../constants/api.constant";
import { QuestionsResDto } from "../dto/question/question.res.dto";

@Injectable({
    providedIn : 'root'
})
export class QuestionService{

    constructor(
        private baseService : BaseService
    ){}

    getQuestions(topicId : string) : Observable<QuestionsResDto[]>{
        return this.baseService.get<QuestionsResDto[]>(`${BASE_URL_CANDIDATE}/questions/${topicId}`)
    }
}