import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { UserResDto } from "../dto/user/user.res.dto";
import { BASE_URL_CANDIDATE } from "../constants/api.constant";
import { UpdateResDto } from "../dto/update.res.dto";
import { UserUpdateReqDto } from "../dto/user/user.update.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";
import { UserInsertReqDto } from "../dto/register/user-insert.req.dto";

@Injectable({
    providedIn : 'root'
})
export class UserService{

    constructor(
        private baseService : BaseService
    ){}

    getUserDetail() : Observable<UserResDto>{
       return this.baseService.get<UserResDto>(`${BASE_URL_CANDIDATE}/users`)
    }

    updateUser(request : UserUpdateReqDto) : Observable<UpdateResDto>{
        return this.baseService.put<UpdateResDto>(`${BASE_URL_CANDIDATE}/users`,request)
    }

    insertUser(request : UserInsertReqDto) : Observable<InsertResDto>{
        return this.baseService.post<InsertResDto>(`${BASE_URL_CANDIDATE}/users`,request)
    }
}