import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { QuestionTopicResDto } from "../dto/question/question-topic.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";
import { QuestionTopicInsertReqDto } from "../dto/question/question-topic-insert.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";

@Injectable({
    providedIn : 'root'
})
export class QuestionService{

    constructor(
        private baseService : BaseService
    ){}

    getTopics() : Observable<QuestionTopicResDto[]>{
        return this.baseService.get<QuestionTopicResDto[]>(`${BASE_URL_ADMIN}/questions`)
    }

    addTopic(request : QuestionTopicInsertReqDto) : Observable<InsertResDto>{
        return this.baseService.post<InsertResDto>(`${BASE_URL_ADMIN}/questions`, request)
    }
}