import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { LoginReqDto } from "../dto/login/login.req.dto";
import { Observable } from "rxjs";
import { LoginResDto } from "../dto/login/login.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";

@Injectable({
    providedIn : 'root'
})
export class LoginService{

    constructor(
        private base : BaseService
    ){}

    login(data : LoginReqDto) : Observable<LoginResDto>{
        return this.base.post<LoginResDto>(`${BASE_URL_ADMIN}/login`, data)
    }
}