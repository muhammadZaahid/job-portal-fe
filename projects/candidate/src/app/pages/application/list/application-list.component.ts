import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { AuthService } from "@candidateServices/auth.service";
import { ApplicantService } from "@candidateServices/applicant.service";
import { ApplicantResDto } from "@candidateDto/applicant/applicant.res.dto";

@Component({
    selector: 'application-list',
    templateUrl: './application-list.component.html'
})
export class ApplicationListComponent implements OnInit {

    items: MenuItem[] | undefined;
    applications: ApplicantResDto[] = []

    constructor(
        private authService: AuthService,
        private applicantService: ApplicantService
    ) { }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token
        this.items = [
            {
                label: 'Applied'
            },
            {
                label: 'Interview'
            }

        ];

        if (profile && token) {
            this.getApplications()
        }

    }

    getApplications() {
        this.applicantService.getApplications().subscribe(result => {
            this.applications = result
        })
    }

}