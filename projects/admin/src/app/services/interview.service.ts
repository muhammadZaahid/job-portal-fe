import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { InterviewResDto } from "../dto/interview/interview.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";
import { InterviewInsertReqDto } from "../dto/interview/interview-insert.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";

@Injectable({
    providedIn: 'root'
})
export class InterviewService {

    constructor(
        private base: BaseService
    ) { }

    getInterview(applicantId : string): Observable<InterviewResDto>{
        return this.base.get<InterviewResDto>(`${BASE_URL_ADMIN}/interview/${applicantId}`,true)
    }

    insertInterview(data : InterviewInsertReqDto):Observable<InsertResDto>{
        return this.base.post<InsertResDto>(`${BASE_URL_ADMIN}/interview`,data,true)
    }
}