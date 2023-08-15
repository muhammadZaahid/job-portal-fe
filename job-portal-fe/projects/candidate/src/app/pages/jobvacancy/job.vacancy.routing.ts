import { RouterModule, Routes } from "@angular/router";
import { JobVacancyListComponent } from "./list/job-vacancy-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SplitterModule } from 'primeng/splitter';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PickListModule } from 'primeng/picklist';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
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
        SplitterModule,
        ScrollerModule,
        CardModule,
        ScrollPanelModule,
        PickListModule,
        VirtualScrollerModule,
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