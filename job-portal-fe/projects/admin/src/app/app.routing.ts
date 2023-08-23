import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BaseComponent } from "./components/base/base.component";
import { BaseModule } from "./components/base/base.module";
import { NotFoundComponent } from "./components/notfound/notfound.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from "@angular/forms";
import { authValidation, authValidationLogin } from "./validation/auth.validation";

const routes : Routes = [
    {
        component : BaseComponent,
        path : 'admin/company',
        loadChildren : () => import('./pages/company/company.module').then(c => c.CompanyModule),
        canMatch : [authValidation]
    },
    {
        component : BaseComponent,
        path : 'admin/candidate',
        loadChildren : () => import('./pages/candidate/candidate.module').then(c => c.CandidateModule),
        canMatch : [authValidation]
    },
    {
        component : BaseComponent,
        path : 'admin/job-vacancy',
        loadChildren : () => import('./pages/jobvacancy/job.vacancy.module').then(j => j.JobVacancyModule),
        canMatch : [authValidation]
    },
    {
        component : BaseComponent,
        path : 'admin/user',
        loadChildren : () => import('./pages/user/user.module').then(u => u.UserModule),
        canMatch : [authValidation]
    },
    {
        component : BaseComponent,
        path : 'admin/question',
        loadChildren : () => import('./pages/question/question.module').then(q => q.QuestionModule),
        canMatch : [authValidation]
    },
    {
        component : BaseComponent,
        path : 'dashboard',
        children : [
            {
                path : '',
                component : DashboardComponent,
                
            }
        ]
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
    },
    {
        path : '',
        redirectTo : '/login',
        pathMatch : 'full'
    },
    {
        path : '**',
        component : NotFoundComponent
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
        CommonModule
    ]
})
export class AppRouting{

}