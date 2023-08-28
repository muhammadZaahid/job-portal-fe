import { Component, OnInit } from "@angular/core";
import { JobVacancyService } from "../../../services/job.vacancy.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { CompanyResDto } from "../../../dto/company/company.res.dto";
import { JobLevelResDto } from "../../../dto/joblevel/job-level.res.dto";
import { UsersResDto } from "../../../dto/user/users.res.dto";
import { CompanyService } from "../../../services/company.service";
import { JobLevelService } from "../../../services/job.level.service";
import { UserService } from "../../../services/user.service";

@Component({
    selector : 'jobvacancy-update',
    templateUrl : './jobvacancy-update.component.html'
})
export class JobVacancyUpdateComponent implements OnInit{

    companies : CompanyResDto[] = []
    jobLevels : JobLevelResDto[] = []
    users : UsersResDto[] = []
    selectedCompany! : CompanyResDto    
    selectedJobLevel! : JobLevelResDto
    selectedUser! : UsersResDto

    jobVacancyUpdateReqDto = this.fb.group({
        jobVacancyId: [''],
        title: [''],
        picId: [''],
        companyId: [''],
        jobLevelId: [''],
        location: [''],
        benefitDesc: [''],
        jobDesc: ['',Validators.required],
        salaryFrom: [0],
        salaryTo: [0],
        salaryPublish: [false],
        startDate: [''],
        endDate: ['']
    })

    constructor(
        private jobVacancyService : JobVacancyService,
        private companyService : CompanyService,
        private jobLevelService : JobLevelService,
        private userService : UserService,
        private router : Router,
        private fb: NonNullableFormBuilder,
        private activatedRoute : ActivatedRoute
    ) {}

    ngOnInit(): void {
        const jobVacancyId = this.activatedRoute.snapshot.params['id'];
        this.getJobVacancyById(jobVacancyId)   
        this.getPicList()
        this.getCompanies()
        this.getJobLevels()        
    }

    onUpdate(){
        if(this.jobVacancyUpdateReqDto.valid){
            const request = this.jobVacancyUpdateReqDto.getRawValue()
            this.jobVacancyService.updateJobVacancy(request).subscribe(result =>{
                this.router.navigateByUrl("/admin/job-vacancy")
                console.log(result)
            })
        }else{
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

    getPicList(){
        this.userService.getPicList().subscribe(result =>{
            this.users = result
        })
    }

    getJobVacancyById(id : number){
        this.jobVacancyService.getJobVacancy(id).subscribe(result =>{
            console.log(result)               
            this.jobVacancyUpdateReqDto.patchValue({
                jobVacancyId : result.id,
                title : result.title,
                picId : result.picId,
                jobLevelId : result.jobLevelId,
                location : result.location,
                benefitDesc : result.benefitDesc,
                jobDesc : result.jobDesc,
                salaryFrom : result.salaryFrom,
                salaryTo : result.salaryTo,
                salaryPublish : result.salaryPublish,
                startDate : result.startDate,
                endDate : result.endDate             
            })            
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
        this.jobVacancyUpdateReqDto.patchValue({
            startDate: formattedDate
        });
    }
    
    endDateWithoutTime(event: any) {
        const formattedDate = this.formatDate(event);
        this.jobVacancyUpdateReqDto.patchValue({
            endDate: formattedDate
        });
    }
}