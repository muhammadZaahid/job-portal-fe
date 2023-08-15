import { RouterModule, Routes } from "@angular/router";
import { JobVacancyListComponent } from "./list/job-vacancy-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SplitterModule } from 'primeng/splitter';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';


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
        SplitterModule,
        ScrollerModule,
        CardModule,
        ScrollPanelModule
    ],
    exports : [
        RouterModule,
        JobVacancyListComponent
    ]
})
export class JobVacancyRouting{

}