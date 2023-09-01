import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { BASE_URL_CANDIDATE } from "../constants/api.constant";
import { LoginReqDto } from "../dto/login/login.req.dto";
import { LoginResDto } from "../dto/login/login.res.dto";


@Injectable({
    providedIn : 'root'
})
export class LoginService{

    constructor(
        private base : BaseService
    ){}

    login(data : LoginReqDto) : Observable<LoginResDto>{
        return this.base.post<LoginResDto>(`${BASE_URL_CANDIDATE}/login`, data)
    }
}