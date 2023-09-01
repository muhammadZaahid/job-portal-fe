import { Component } from "@angular/core";
import { AllJobVacancyResDto } from "../../../dto/jobvacancy/all-job-vacancy.res.dto";
import { JobVacancyService } from "../../../services/job.vacancy.service";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector : 'jobvacancy-list',
    templateUrl : './jobvacancy-list.component.html'
})
export class JobVacancyListComponent{
    jobVacancies!: AllJobVacancyResDto[]

    constructor(
        private jobVacancyService : JobVacancyService,
        private authService: AuthService,
        private roter : Router
    ){}

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = this.authService.getProfile()?.token
        if(profile && token){
            this.getCompanies()
        }else{
            console.log('invalid')
        }
    }

    getCompanies(){
        this.jobVacancyService.getJobVacancies().subscribe(result => {
            this.jobVacancies = result
            console.log(result)
        })
    }

    navigateToId(id : number){
        this.roter.navigateByUrl(`/admin/job-vacancy/edit/${id}`)
    }
}