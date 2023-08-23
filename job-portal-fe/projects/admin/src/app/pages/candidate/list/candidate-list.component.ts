import { Component, OnInit } from "@angular/core"
import { CandidateResDto } from "../../../dto/candidate/candidate.res.dto"
import { CandidateService } from "../../../services/candidate.service"
import { AuthService } from "../../../services/auth.service"
import { NonNullableFormBuilder } from "@angular/forms"
import { JobVacancyService } from "../../../services/job.vacancy.service"
import { AllJobVacancyResDto } from "../../../dto/jobvacancy/all-job-vacancy.res.dto"
import { ApplicantService } from "../../../services/applicant.service"
import { Router } from "@angular/router"

@Component({
    selector : 'candidate-list',
    templateUrl : './candidate-list.component.html'
})
export class CandidateListComponent implements OnInit{

    candidates!: CandidateResDto[]
    selectedCandidate! : CandidateResDto
    clickedRadioButton = true
    clickedRadioButtonJob = true
    jobVacancies : AllJobVacancyResDto[] = []
    selectedJobVacancy!: AllJobVacancyResDto

    constructor(
        private candidateService : CandidateService,
        private jobVacancyService : JobVacancyService,
        private applicantService : ApplicantService,
        private authService: AuthService,
        private fb : NonNullableFormBuilder
    ){}

    applicantInsertReqDto = this.fb.group({
        candidateId: [''],
	    jobVacancyId: ['']
    })

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = this.authService.getProfile()?.token
        if(profile && token){
            this.getCandidates()
            this.getJobVacancies()
        }else{
            console.log('invalid')
        }
    }


    getCandidates(){
        this.candidateService.getCandidates().subscribe(result => {
            this.candidates = result
            console.log(result)
        })
    }

    getJobVacancies(){
        this.jobVacancyService.getJobVacancies().subscribe(result =>{
            this.jobVacancies = result
        })
    }

    getCandidateId(){
        this.applicantInsertReqDto.patchValue({
            candidateId : this.selectedCandidate.id
        })
    }

    getJobVacancyId(){
        this.applicantInsertReqDto.patchValue({
            jobVacancyId : this.selectedJobVacancy.id
        })
    }

    onAdd(){
        if(this.applicantInsertReqDto.valid){
            const request = this.applicantInsertReqDto.getRawValue()
            this.applicantService.addToVacancy(request).subscribe(result =>{
                this.visible = false                
                console.log(result)  
                this.getCandidates()                             
            })
        }else{
            console.log('Invalid')
        }    
    }

    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}