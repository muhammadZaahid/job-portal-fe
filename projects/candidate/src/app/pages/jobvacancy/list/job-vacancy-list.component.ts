import { Component, OnInit } from "@angular/core";

import { NonNullableFormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { JobVacancyDetailResDto } from "@candidateDto/jobvacancy/job-vacancy-detail.res.dto";
import { JobVacancyResDto } from "@candidateDto/jobvacancy/job-vacancy.res.dto";
import { ApplicantService } from "@candidateServices/applicant.service";
import { AuthService } from "@candidateServices/auth.service";
import { JobVacancyService } from "@candidateServices/job.vacancy.service";
import { UserService } from "@candidateServices/user.service";
import { MessageService } from "primeng/api";

@Component({
    selector: 'job-vacancy-list',
    templateUrl: './job-vacancy-list.component.html'
})
export class JobVacancyListComponent implements OnInit {

    jobVacancies: JobVacancyResDto[] = []
    jobVacancy!: JobVacancyDetailResDto
    checkProfile = false
    endDate = new Date()
    startDate = new Date()

    constructor(
        private authService: AuthService,
        private jobVacancyService: JobVacancyService,
        private applicantService: ApplicantService,
        private userService: UserService,
        private fb: NonNullableFormBuilder,
        private messageService: MessageService,
        private router: Router
    ) { }

    applicantInsertReq = this.fb.group({
        candidateId: [''],
        jobVacancyId: ['']
    })

    ngOnInit() {
        const profile = this.authService.getProfile()
        const token = profile?.token
        if (profile && token) {
            this.getJobVacancies()
        }
    }

    checkUpdateProfile() {
        this.userService.checkProfile().subscribe(result => {
            this.checkProfile = result
        })
    }

    getJobVacancies() {
        this.jobVacancyService.getJobVacancies().subscribe(result => {
            this.jobVacancies = result
        })
    }

    getJobVacancy(jobVacancyId: string) {
        const candidateId = this.authService.getProfile()!.candidateId
        this.jobVacancyService.getJobVacancy(jobVacancyId).subscribe(result => {
            this.jobVacancy = result
            console.log(result)
            this.applicantInsertReq.patchValue({
                candidateId: candidateId,
                jobVacancyId: jobVacancyId
            })
        })
    }

    applyJob() {
        if (this.checkProfile) {
            if (this.applicantInsertReq.valid) {

                const request = this.applicantInsertReq.getRawValue()

                this.applicantService.applyJob(request).subscribe(result => {
                    console.log(result)
                })
            }
        }else{
            this.warnProfile()
        }
    }

    warnProfile(){
        this.messageService.add({
            severity: 'info',
            summary:'Info',
            detail:'Please Update your Profile'
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
    jobIdCard!: string
    isDetail = false
    clickCard(cardIndex: number) {
        const jobId = this.jobVacancies.at(cardIndex)!.id
        this.jobIdCard = jobId
        this.isDetail = true
        this.getJobVacancy(jobId)
    }

    checkCard(jobId: string) {
        if (jobId == this.jobIdCard) {
            return 'job-list-card-on-click'
        } else {
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