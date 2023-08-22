import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Observable } from "rxjs";
import { UsersResDto } from "../dto/user/users.res.dto";
import { BASE_URL_ADMIN } from "../constants/api.constant";

@Injectable({
    providedIn : 'root'
})
export class UserService{

    constructor(
        private baseService : BaseService
    ){}

    getUsers() : Observable<UsersResDto[]>{
        return this.baseService.get<UsersResDto[]>(`${BASE_URL_ADMIN}/users`)
    }
}