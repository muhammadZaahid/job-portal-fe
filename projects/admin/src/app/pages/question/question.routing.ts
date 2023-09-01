import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionListComponent } from "./list/question-list.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../components/shared-module";
import { QuestionCreateComponent } from "./create/question-create.component";
import { ReactiveFormsModule } from "@angular/forms";

const routes : Routes = [
    {
        path : '',
        component : QuestionListComponent
    },
    {
        path : 'add',
        component : QuestionCreateComponent
    }
]

@NgModule({
    declarations : [
        QuestionListComponent,
        QuestionCreateComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ],
    exports : [
        RouterModule,
        QuestionListComponent,
        QuestionCreateComponent
    ]
})
export class QuestionRouting{

}