import { Injectable } from "@angular/core"
import { BaseService } from "./base.service"
import { MedicalResDto } from "../dto/medical/medical.res.dto"
import { Observable } from "rxjs"
import { BASE_URL_ADMIN } from "../constants/api.constant"
import { MedicalInsertReqDto } from "../dto/medical/medical-insert.req.dto"
import { InsertResDto } from "../dto/insert.res.dto"

@Injectable({
    providedIn: 'root'
})
export class MedicalService {

    constructor(
        private base: BaseService
    ) { }

    getMedical(applicantId : string): Observable<MedicalResDto>{
        return this.base.get<MedicalResDto>(`${BASE_URL_ADMIN}/medical/${applicantId}`,true)
    }

    insertMedical(data : MedicalInsertReqDto):Observable<InsertResDto>{
        return this.base.post<InsertResDto>(`${BASE_URL_ADMIN}/medical`,data,true)
    }
}