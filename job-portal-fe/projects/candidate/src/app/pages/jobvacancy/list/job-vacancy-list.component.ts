import { Component, OnInit } from "@angular/core";
import { CompanyResDto } from "projects/admin/src/app/dto/company/company.res.dto";

@Component({
    selector : 'job-vacancy-list',
    templateUrl : './job-vacancy-list.component.html'
})
export class JobVacancyListComponent implements OnInit{
    items!: string[];
    companies! : CompanyResDto[]

    ngOnInit() {
        this.items = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);   
    }
}