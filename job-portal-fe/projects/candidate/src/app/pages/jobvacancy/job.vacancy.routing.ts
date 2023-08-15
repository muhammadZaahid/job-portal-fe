import { RouterModule, Routes } from "@angular/router";
import { JobVacancyListComponent } from "./list/job-vacancy-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from "primeng/button";
import { DividerModule } from 'primeng/divider';

const routes : Routes = [
    {
        path : '',
        component : JobVacancyListComponent
    }
]

@NgModule({
    declarations : [
        JobVacancyListComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        CardModule,
        ScrollPanelModule,
        ButtonModule,
        DividerModule
    ],
    exports : [
        RouterModule,
        JobVacancyListComponent
    ]
})
export class JobVacancyRouting{

}