import { Component } from "@angular/core";
import { UsersResDto } from "../../../dto/user/users.res.dto";
import { UserService } from "../../../services/user.service";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector : 'user-list',
    templateUrl : './user-list.component.html'
})
export class UserListComponent{

    users: UsersResDto[] = []

    constructor(
        private userService : UserService,
        private authService: AuthService,
        private roter : Router
    ){}

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = this.authService.getProfile()?.token
        if(profile && token){
            this.getUsers()
        }else{
            console.log('invalid')
        }
    }

    getUsers(){
        this.userService.getUsers().subscribe(result => {
            this.users = result
            console.log(result)
        })
    }
}