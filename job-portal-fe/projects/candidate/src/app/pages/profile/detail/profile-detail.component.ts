import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { UserResDto } from "../../../dto/user/user.res.dto";
import { UserService } from "../../../services/user.service";
import { AuthService } from "../../../services/auth.service";

@Component({
    selector : 'profile-detail',
    templateUrl : './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit{

    resumeMenuItems: MenuItem[] | undefined;
    userDetail! : UserResDto 
    imageUrl! : string
    photoId! : string

    constructor(
        private authService : AuthService,
        private userService : UserService
    ){}

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token
        this.resumeMenuItems = [
            {
                label : 'View'
            },
            {
                label : 'Download'
            }            
        ]

        if(profile && token){
            this.getUserDetail()
        }        
        
    }

    getUserDetail(){
        this.userService.getUserDetail().subscribe(result =>{
            this.userDetail = result    
            this.imageUrl = `http://localhost:8081/seeker/file/${result.photoId}`        
        })
    }
    
    setDefaultPic(){
        this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorWw_NxS1hwieUhifQH2Fb0WkFQiQtWwafg&usqp=CAU"
    }


}