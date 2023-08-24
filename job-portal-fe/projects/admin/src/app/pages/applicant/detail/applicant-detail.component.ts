import { Component, OnInit } from "@angular/core";
import { CandidateResDto } from "../../../dto/candidate/candidate.res.dto";
import { CandidateService } from "../../../services/candidate.service";
import { AuthService } from "../../../services/auth.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ApplicantService } from "../../../services/applicant.service";
import { ApplicantDetailResDto } from "../../../dto/applicant/applicant-detail.res.dto";
import { AssessementService } from "../../../services/assessement.service";
import { AssessmentResDto } from "../../../dto/assessement/assessment.res.dto";
import { ConfirmationService, MenuItem } from "primeng/api";

@Component({
    selector : 'applicant-detail',
    templateUrl : './applicant-detail.component.html',
    providers : [ConfirmationService]
})
export class ApplicantDetailComponent implements OnInit{

    applicantDetail! : ApplicantDetailResDto
    candidate! : CandidateResDto
    assessment! : AssessmentResDto
    resumeMenuItems: MenuItem[] | undefined;

    constructor(
        private candidateService : CandidateService,
        private applicantService : ApplicantService,
        private assessementService : AssessementService,
        private authService : AuthService,
        private activatedRoute : ActivatedRoute,
        private confirmationService : ConfirmationService,
        private router : Router
        )
        {}

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token
        const applicantId = this.activatedRoute.snapshot.params['id']        
        if(profile && token){
            this.getApplicantDetail(applicantId)
            this.resumeMenuItems = [
                {
                    label : 'View'
                },
                {
                    label : 'Download',
                    url : 'http://localhost:8080/admin/file/a6e54e96-be79-4bb9-98ff-5f59c33a0561',
                    target : '_self'
                }            
            ]                                                               
        }else{
            console.log('Invalid')
        }
    }

    getApplicantDetail(applicantId:string){
        this.applicantService.getApplicantDetail(applicantId).subscribe(result =>{
            this.applicantDetail = result                 
            this.getCandidate(result.candidateId)
            if(result.assessment){
                this.getAssessment(applicantId) 
            }              
            this.checkCurrentStage(result.currentStage)              
        })
    }

    getCandidate(candidateId : string){
        this.candidateService.getCandidate(candidateId).subscribe(result=>{
            this.candidate = result           
        })
    }

    getAssessment(applicantId:string){        
        this.assessementService.getAssessment(applicantId).subscribe(result=>{
            this.assessment = result
        })
    }

    changeStage(applicantId : string){
        this.applicantService.changeStage(applicantId).subscribe(result =>{
            console.log(result)
            this.getApplicantDetail(applicantId)            
        })
    }
    
    confirmMoveToAssessment() {
        const applicantId = this.activatedRoute.snapshot.params['id']
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.changeStage(applicantId)
                this.stageApplication = false                
            },
            reject: () => {
               
            }
        });
    }

    visible: boolean = false;

    insertInterviewModal() {
        this.visible = true;
    }

    stageApplication = false
    stageAssessement = false
    stageInterview = false
    stageMcu = false
    stageOffer = false
    
    checkCurrentStage(currentStage : string){
        if(currentStage == 'application'){
            this.stageApplication = true
        }
        else if(currentStage == 'assessment'){
           this. stageAssessement = true
        }else if(currentStage == 'interview'){
            this. stageMcu = true
        }else if(currentStage == 'mcu'){
            this. stageMcu = true
        }else if(currentStage == 'offer'){
            this. stageOffer = true
        }
    }


}