import { Component } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { ApplicantsResDto } from "../../../dto/applicant/applicants.res.dto";
import { ApplicantService } from "../../../services/applicant.service";
import { CandidateResDto } from "../../../dto/candidate/candidate.res.dto";
import { CandidateService } from "../../../services/candidate.service";
import { NonNullableFormBuilder } from "@angular/forms";

@Component({
    selector: 'aplicant-list',
    templateUrl: './applicant-list.component.html'
})
export class ApplicantListComponent {

    applicants!: ApplicantsResDto[]
    visible: boolean = false;
    candidates: CandidateResDto[] = []
    selectedCandidate: CandidateResDto | undefined

    constructor(
        private applicantService: ApplicantService,
        private candidateService: CandidateService,
        private authService: AuthService,
        private fb: NonNullableFormBuilder,
        private roter: Router
    ) { }

    showDialog() {
        this.visible = true;
    }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = this.authService.getProfile()?.token
        if (profile && token) {
            this.getApplicants()
            this.getCandidates()
        } else {
            console.log('invalid')
        }
    }

    getApplicants() {
        this.applicantService.getApplicants().subscribe(result => {
            this.applicants = result
            console.log(result)
        })
    }

    getCandidates() {
        this.candidateService.getCandidates().subscribe(result => {
            this.candidates = result
            console.log('CANDIDATE :' + result)
        })
    }

    navigateToId(id: number) {
        this.roter.navigateByUrl(`/admin/applicant/detail/${id}`)
    }

}