import { RouterModule, Routes } from "@angular/router";
import { ApplicationListComponent } from "./list/application-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes : Routes = [
    {
        path : '',
        component : ApplicationListComponent
    }
]

@NgModule({
    declarations : [
        ApplicationListComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports : [
        RouterModule,
        ApplicationListComponent
    ]
})
export class ApplicationRouting{

}