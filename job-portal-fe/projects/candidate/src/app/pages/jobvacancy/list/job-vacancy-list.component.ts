import { Component, OnInit } from "@angular/core";
import { JobVacancyResDto } from "../../../dto/jobvacancy/job-vacancy.res.dto";
import { AuthService } from "../../../services/auth.service";
import { JobVacancyService } from "../../../services/job.vacancy.service";
import { JobVacancyDetailResDto } from "../../../dto/jobvacancy/job-vacancy-detail.res.dto";

@Component({
    selector: 'job-vacancy-list',
    templateUrl: './job-vacancy-list.component.html'
})
export class JobVacancyListComponent implements OnInit {

    jobVacancies: JobVacancyResDto[] = []
    jobVacancy!: JobVacancyDetailResDto

    endDate = new Date()
    startDate = new Date()

    constructor(
        private authService: AuthService,
        private jobVacancyService: JobVacancyService

    ) { }

    ngOnInit() {
        const profile = this.authService.getProfile()
        const token = profile?.token
        if (profile && token) {
            this.getJobVacancies()
        }
    }

    getJobVacancies() {
        this.jobVacancyService.getJobVacancies().subscribe(result => {
            this.jobVacancies = result
        })
    }

    getJobVacancy(jobVacancyId : string){
        this.jobVacancyService.getJobVacancy(jobVacancyId).subscribe(result =>{
            this.jobVacancy = result
        })
    }

    getEndDate(date: string) {
        return this.endDate = new Date(date)
    }

    getStartDate(date: string) {
        const startDate = this.transform(date)
        return this.startDate = startDate
    }

    cardStyle = 'job-list-card'
    jobIdCard! : string
    isDetail = false
    clickCard(cardIndex : number){
        const jobId = this.jobVacancies.at(cardIndex)!.id 
        this.jobIdCard = jobId
        this.isDetail = true
        this.getJobVacancy(jobId)
    } 
    
    checkCard(jobId:string){
        if(jobId == this.jobIdCard){
            return 'job-list-card-on-click'
        }else{
            return 'job-list-card'
        }       
    }

    transform(value: any): any {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);           
            if (seconds < 86400)
                return 'Just now';
            const intervals: { [key: string]: number } = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago';
                    } else {
                        return counter + ' ' + i + 's ago';
                    }
            }
        }
        return value;
    }
}