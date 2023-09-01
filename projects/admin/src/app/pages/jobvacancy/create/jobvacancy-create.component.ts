import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JobVacancyService } from "../../../services/job.vacancy.service";
import { CompanyResDto } from "../../../dto/company/company.res.dto";
import { CompanyService } from "../../../services/company.service";
import { JobLevelResDto } from "../../../dto/joblevel/job-level.res.dto";
import { JobLevelService } from "../../../services/job.level.service";
import { UsersResDto } from "../../../dto/user/users.res.dto";
import { UserService } from "../../../services/user.service";
import { QuestionTopicResDto } from "../../../dto/question/question-topic.res.dto";
import { QuestionService } from "../../../services/question.service";

@Component({
    selector: 'jobvacancy-create',
    templateUrl: './jobvacancy-create.component.html'
})
export class JobVacancyCreateComponent implements OnInit{  
    
    companies : CompanyResDto[] = []
    jobLevels : JobLevelResDto[] = []
    users : UsersResDto[] = []
    topics : QuestionTopicResDto[] = []
    selectedCompany! : CompanyResDto    
    selectedJobLevel! : JobLevelResDto
    selectedUser! : UsersResDto
    selectedTopic! : QuestionTopicResDto
    hasAssessment = false

    jobVacancyInsertReqDto = this.fb.group({
        title: ['',Validators.required],
        picId: ['',Validators.required],
        companyId: ['',Validators.required],
        jobLevelId: ['',Validators.required],
        location: ['',Validators.required],
        benefitDesc: ['',Validators.required],
        salaryFrom: [0,Validators.required],
        salaryTo: [0,Validators.required],
        salaryPublish: [false,Validators.required],
        startDate: ['',Validators.required],
        endDate: ['',Validators.required],
        jobDesc: ['',Validators.required],
        topicId:['',Validators.required]
    })

    constructor(
        private jobVacancyService: JobVacancyService,
        private companyService : CompanyService,
        private jobLevelService : JobLevelService,
        private userService : UserService,
        private questionService : QuestionService,
        private router: Router,
        private fb: NonNullableFormBuilder
    ) {}

    ngOnInit(): void {
        this.getCompanies()
        this.getJobLevels()
        this.getPicList()   
        this.getTopics()          
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

    getPicList(){
        this.userService.getPicList().subscribe(result =>{
            this.users = result
        })
    }

    getTopics(){
        this.questionService.getTopics().subscribe(result=>{
            this.topics = result
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
    
    checkHasAssessment(){
        if(this.hasAssessment === false){
            this.jobVacancyInsertReqDto.reset()
        }
    }
}