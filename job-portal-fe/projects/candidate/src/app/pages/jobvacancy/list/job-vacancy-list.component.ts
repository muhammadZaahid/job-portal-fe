import { Component, OnInit } from "@angular/core";
import { JobVacancyResDto } from "../../../dto/jobvacancy/job-vacancy.res.dto";

@Component({
    selector : 'job-vacancy-list',
    templateUrl : './job-vacancy-list.component.html'
})
export class JobVacancyListComponent implements OnInit{
   
    jobVacancies : JobVacancyResDto[] = []

    ngOnInit() {
        
    }
}