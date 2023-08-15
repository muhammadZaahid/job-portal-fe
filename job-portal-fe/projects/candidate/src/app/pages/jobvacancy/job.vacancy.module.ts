import { NgModule } from "@angular/core";
import { JobVacancyRouting } from "./job.vacancy.routing";
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [
        JobVacancyRouting,
        CommonModule
    ]
})
export class JobVacancyModule{

}