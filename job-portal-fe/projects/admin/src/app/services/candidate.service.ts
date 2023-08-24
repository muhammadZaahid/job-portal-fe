import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { BASE_URL_ADMIN } from "../constants/api.constant";
import { CandidateResDto } from "../dto/candidate/candidate.res.dto";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class CandidateService{
    
    constructor(
        private base : BaseService
    ){}

    getCandidates() : Observable<CandidateResDto[]>{
        return this.base.get<CandidateResDto[]>(`${BASE_URL_ADMIN}/candidate`)
    }

    getCandidate(candidateId : string) : Observable<CandidateResDto>{
        return this.base.get<CandidateResDto>(`${BASE_URL_ADMIN}/candidate/${candidateId}`)
    }
}