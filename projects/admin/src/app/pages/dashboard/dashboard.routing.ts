import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path : '',
        component : DashboardComponent
    }
]

@NgModule({
    declarations : [
        DashboardComponent
    ],
    imports : [
        RouterModule.forChild(routes)
    ],
    exports : [
        RouterModule,
        DashboardComponent
    ]
})
export class DashboardRouting{

}