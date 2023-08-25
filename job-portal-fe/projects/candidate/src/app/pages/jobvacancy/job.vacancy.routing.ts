import { RouterModule, Routes } from "@angular/router";
import { JobVacancyListComponent } from "./list/job-vacancy-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SharedModule } from "../../components/shared-module";

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
        SharedModule
    ],
    exports : [
        RouterModule,
        JobVacancyListComponent
    ]
})
export class JobVacancyRouting{

}