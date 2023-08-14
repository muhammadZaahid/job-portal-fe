import { Component, OnInit } from "@angular/core"
import { CandidateResDto } from "../../../dto/candidate/candidate.res.dto"
import { CandidateService } from "../../../services/candidate.service"
import { AuthService } from "../../../services/auth.service"

@Component({
    selector : 'candidate-list',
    templateUrl : './candidate-list.component.html'
})
export class CandidateListComponent implements OnInit{

    candidates!: CandidateResDto[]

    constructor(
        private candidateService : CandidateService,
        private authService: AuthService
    ){}

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
}