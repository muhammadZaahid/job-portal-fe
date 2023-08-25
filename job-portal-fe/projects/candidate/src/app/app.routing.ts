import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from "./components/base/base.component";
import { NgModule } from "@angular/core";
import { BaseModule } from "./components/base/base.module";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { CardModule } from "primeng/card";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./pages/login/login.component";
import { authValidationLogin } from "./validation/auth.validation";


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
    },
    {
        component : BaseComponent,
        path : 'candidate/application',
        loadChildren : () => import('./pages/application/application.module').then(a => a.ApplicationModule)
    },
    {
        path : 'login',
        children : [
            {
                path : '',
                component : LoginComponent,   
                canMatch : [authValidationLogin]             
            }
        ]
    }

]

@NgModule({
    declarations: [
        LoginComponent
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
    ]
})
export class AppRouting{

}