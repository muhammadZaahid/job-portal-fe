import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { UsersResDto } from "../dto/user/users.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";
import { UserInsertReqDto } from "../dto/user/user-insert.req.dto";
import { InsertResDto } from "../dto/insert.res.dto";
import { UsersListResDto } from "../dto/user/users-list.res.dto";

@Injectable({
    providedIn : 'root'
})
export class UserService{

    constructor(
        private baseService : BaseService
    ){}

    getPicList() : Observable<UsersResDto[]>{
        return this.baseService.get<UsersResDto[]>(`${BASE_URL_ADMIN}/users/pic-list`)
    }

    addUser(request : UserInsertReqDto) : Observable<InsertResDto>{
        return this.baseService.post<InsertResDto>(`${BASE_URL_ADMIN}/users`, request)        
    }

    getUsers() : Observable<UsersListResDto[]>{
        return this.baseService.get<UsersListResDto[]>(`${BASE_URL_ADMIN}/users`)
    }
}