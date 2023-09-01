import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
    selector : 'dashboard',
    templateUrl : './dashboard.component.html'
})
export class DashboardComponent{

    fullname = ''

    constructor(
        private authService : AuthService
    )
    {
        const profile = this.authService.getProfile()
        if(profile){
            this.fullname = profile.profileName
        }
    }
}