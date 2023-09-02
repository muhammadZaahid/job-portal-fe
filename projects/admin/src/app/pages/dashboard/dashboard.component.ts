import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { CountResDto } from "../../dto/count.res.dto";
import { DashboardService } from "../../services/dashboard.service";

@Component({
    selector : 'dashboard',
    templateUrl : './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    fullname = ''

    totalCandidate! : CountResDto 
    totalApplicant! : CountResDto 
    totalCompany! : CountResDto 
    totalJobVacancy! : CountResDto 
    totalUser! : CountResDto 

    constructor(
        private authService : AuthService,
        private dashboardService : DashboardService
    )

    {
        const profile = this.authService.getProfile()
        if(profile){
            this.fullname = profile.profileName
        }
    }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token
        if(profile && token){
            this.getTotalCandidate()
            this.getTotalApplicant()
            this.getTotalCompany()
            this.getTotalJobVacancy()
            this.getTotalUser()
        }
    }

    getTotalCandidate(){
        this.dashboardService.getTotalCandidate().subscribe(result =>{
            this.totalCandidate = result
        })
    }

    getTotalApplicant(){
        this.dashboardService.getTotalApplicant().subscribe(result =>{
            this.totalApplicant = result
        })
    }

    getTotalCompany(){
        this.dashboardService.getTotalCompany().subscribe(result =>{
            this.totalCompany = result
        })
    }

    getTotalJobVacancy(){
        this.dashboardService.getTotalJobVacancy().subscribe(result =>{
            this.totalJobVacancy = result
        })
    }

    getTotalUser(){
        this.dashboardService.getTotalUser().subscribe(result =>{
            this.totalUser = result
        })
    }
}