import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { CompanyResDto } from "../dto/company/company.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";
import { CompanyInsertReqDto } from "../dto/company/company-insert.req.dto";
import { CompanyUpdateReqDto } from "../dto/company/company-update.req.dto";
import { UpdateResDto } from "../dto/update.res.dto";
import { CompanyDetailResDto } from "../dto/company/company-detail.res.dto";
import { InsertResDto } from "../dto/insert.res.dto";

@Injectable({
    providedIn : 'root'
})
export class CompanyService{
    
    constructor(
        private base : BaseService
    ){}

    getCompanies() : Observable<CompanyResDto[]>{
        return this.base.get<CompanyResDto[]>(`${BASE_URL_ADMIN}/company`)
    }

    addCompany(request : CompanyInsertReqDto) : Observable<InsertResDto>{
        return this.base.post<InsertResDto>(`${BASE_URL_ADMIN}/company`, request)
    }

    getCompany(companyId : number) : Observable<CompanyDetailResDto>{
        return this.base.get<CompanyDetailResDto>(`${BASE_URL_ADMIN}/company/${companyId}`)
    }

    updateCompany(request : CompanyUpdateReqDto) : Observable<CompanyUpdateReqDto>{
        return this.base.put<CompanyUpdateReqDto>(`${BASE_URL_ADMIN}/company`, request)
    }
}