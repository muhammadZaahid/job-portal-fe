import { Component, OnInit } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JobVacancyService } from "../../../services/job.vacancy.service";
import { CompanyResDto } from "../../../dto/company/company.res.dto";
import { CompanyService } from "../../../services/company.service";
import { JobLevelResDto } from "../../../dto/joblevel/job-level.res.dto";
import { JobLevelService } from "../../../services/job.level.service";
import { UsersResDto } from "../../../dto/user/users.res.dto";
import { UserService } from "../../../services/user.service";

@Component({
    selector: 'jobvacancy-create',
    templateUrl: './jobvacancy-create.component.html'
})
export class JobVacancyCreateComponent implements OnInit{  
    
    companies : CompanyResDto[] = []
    jobLevels : JobLevelResDto[] = []
    users : UsersResDto[] = []
    selectedCompany! : CompanyResDto    
    selectedJobLevel! : JobLevelResDto
    selectedUser! : UsersResDto

    jobVacancyInsertReqDto = this.fb.group({
        title: ['', [Validators.required]],
        picId: [''],
        companyId: [''],
        jobLevelId: [''],
        location: [''],
        benefitDesc: [''],
        salaryFrom: [0],
        salaryTo: [0],
        salaryPublish: [false],
        startDate: [''],
        endDate: ['']
    })

    constructor(
        private jobVacancyService: JobVacancyService,
        private companyService : CompanyService,
        private jobLevelService : JobLevelService,
        private userService : UserService,
        private router: Router,
        private fb: NonNullableFormBuilder
    ) {}

    ngOnInit(): void {
        this.getCompanies()
        this.getJobLevels()
        this.getUsers()
    }

    onAdd() {
        if (this.jobVacancyInsertReqDto.valid) {
            const request = this.jobVacancyInsertReqDto.getRawValue()
            this.jobVacancyService.addJobVacancy(request).subscribe(result => {
                this.router.navigateByUrl("/admin/job-vacancy")
                console.log(result)
            })
        } else {
            console.log('Invalid')
        }
    }  

    getCompanies(){
        this.companyService.getCompanies().subscribe(result => {
            this.companies = result
        })
    }

    getJobLevels(){
        this.jobLevelService.getJobLevels().subscribe(result =>{
            this.jobLevels = result
        })
    }

    getUsers(){
        this.userService.getUsers().subscribe(result =>{
            this.users = result
        })
    }

    formatDate(event: any): string {
        const toString = (date: number, padLength: number): string => {
            return date.toString().padStart(padLength, '0');
        };
    
        const formattedDate =
            toString(event.getFullYear(), 4) +
            '-' + toString(event.getMonth() + 1, 2) +
            '-' + toString(event.getDate(), 2);
    
        return formattedDate;
    }
    
    startDateWithoutTime(event: any) {
        const formattedDate = this.formatDate(event);
        this.jobVacancyInsertReqDto.patchValue({
            startDate: formattedDate
        });
    }
    
    endDateWithoutTime(event: any) {
        const formattedDate = this.formatDate(event);
        this.jobVacancyInsertReqDto.patchValue({
            endDate: formattedDate
        });
    }
    
    
}