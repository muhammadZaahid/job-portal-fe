import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'job-vacancy-list',
    templateUrl : './job-vacancy-list.component.html'
})
export class JobVacancyListComponent implements OnInit{
    items!: string[];
    ngOnInit() {
        this.items = Array.from({ length: 10 }).map((_, i) => `Item #${i}`);   
    }
}