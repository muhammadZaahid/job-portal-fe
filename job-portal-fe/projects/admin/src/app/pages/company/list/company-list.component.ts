import { Component, OnInit } from "@angular/core";
import { CompanyResDto } from "../../../dto/company/company.res.dto";
import { CompanyService } from "../../../services/company.service";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector : 'company-list',
    templateUrl : './company-list.component.html'
})
export class CompanyListComponent implements OnInit{

    companies!: CompanyResDto[]

    constructor(
        private companyService : CompanyService,
        private authService: AuthService
    ){}

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = this.authService.getProfile()?.token
        if(profile && token){
            this.getCompanies()
        }else{
            console.log('invalid')
        }
    }

    getCompanies(){
        this.companyService.getCompanies().subscribe(result => {
            this.companies = result
            console.log(result)
        })
    }
}