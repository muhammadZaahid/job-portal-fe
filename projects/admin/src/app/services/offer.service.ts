import { Injectable } from "@angular/core"
import { BaseService } from "./base.service"
import { Observable } from "rxjs"
import { OfferingResDto } from "../dto/offer/offering.res.dto"
import { BASE_URL_ADMIN } from "../constants/api.constant"
import { OfferingInsertReqDto } from "../dto/offer/offering.insert.req.dto"
import { InsertResDto } from "../dto/insert.res.dto"

@Injectable({
    providedIn: 'root'
})
export class OfferService {

    constructor(
        private base: BaseService
    ) { }

    getOffer(applicantId : string): Observable<OfferingResDto>{
        return this.base.get<OfferingResDto>(`${BASE_URL_ADMIN}/offer/${applicantId}`,true)
    }

    insertOffer(data : OfferingInsertReqDto):Observable<InsertResDto>{
        return this.base.post<InsertResDto>(`${BASE_URL_ADMIN}/offer`,data,true)
    }
}