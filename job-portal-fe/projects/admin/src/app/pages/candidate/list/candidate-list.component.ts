import { Component, OnInit } from "@angular/core"
import { CandidateResDto } from "../../../dto/candidate/candidate.res.dto"
import { CandidateService } from "../../../services/candidate.service"
import { AuthService } from "../../../services/auth.service"
import { NonNullableFormBuilder } from "@angular/forms"

@Component({
    selector : 'candidate-list',
    templateUrl : './candidate-list.component.html'
})
export class CandidateListComponent implements OnInit{

    candidates!: CandidateResDto[]
    selectedCandidate! : CandidateResDto
    clickedRadioButton = true

    constructor(
        private candidateService : CandidateService,
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

    onSelect(){
        this.applicantInsertReqDto.patchValue({
            candidateId : this.selectedCandidate.id
        })
    }

    checkCandidate(){
        if(this.selectedCandidate !== null){
            return true
        }
        else{
            return false
        }
    }
}