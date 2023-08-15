import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from "./components/base/base.component";
import { NgModule } from "@angular/core";
import { BaseModule } from "./components/base/base.module";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { ReactiveFormsModule } from "@angular/forms";


const routes : Routes = [ 
    {
        component : BaseComponent,
        path : 'candidate/jobvacancy',
        loadChildren : () => import('./pages/jobvacancy/job.vacancy.module').then(j => j.JobVacancyModule)        
    },
    {
        component : BaseComponent,
        path : 'candidate/profile',
        loadChildren : () => import('./pages/profile/profile.module').then(p => p.ProfileModule)        
    }

]

@NgModule({
    declarations: [
    ],
    imports : [
        RouterModule.forRoot(routes),
        BaseModule,
        CommonModule,
        ButtonModule,
        InputTextModule,
        CardModule,
        ReactiveFormsModule
    ],
    exports : [
        RouterModule,
        CommonModule,
        CommonModule,
    ]
})
export class AppRouting{

}