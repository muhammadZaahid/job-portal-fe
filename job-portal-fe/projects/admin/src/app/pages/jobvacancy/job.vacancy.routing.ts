import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JobVacancyListComponent } from "./list/jobvacancy-list.component";
import { SharedModule } from "../../components/shared-module";
import { JobVacancyCreateComponent } from "./create/jobvacancy-create.component";
import { ReactiveFormsModule } from "@angular/forms";
import { JobVacancyUpdateComponent } from "./update/jobvacancy-update.component";

const routes : Routes = [
    {
        path : '',
        component : JobVacancyListComponent
    },
    {
        path : 'add',
        component : JobVacancyCreateComponent
    },
    {
        path : 'edit/:id',
        component : JobVacancyUpdateComponent
    }
]

@NgModule({
    declarations : [
        JobVacancyListComponent,
        JobVacancyCreateComponent,
        JobVacancyUpdateComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
    ],
    exports : [
        RouterModule,
        JobVacancyListComponent,
        JobVacancyCreateComponent,
        JobVacancyUpdateComponent
    ]
})
export class JobVacancyRouting{

}