import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionDetailComponent } from "./detail/question-detail.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../components/shared-module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes : Routes = [
    {
        path : 'detail/:topicId/:jobVacancyId',
        component : QuestionDetailComponent
    }
]

@NgModule({
    declarations : [
        QuestionDetailComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule

    ],
    exports : [
        QuestionDetailComponent,
        RouterModule
    ]
})
export class QuestionRouting{

}