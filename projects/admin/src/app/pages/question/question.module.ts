import { NgModule } from "@angular/core";
import { QuestionRouting } from "./question.routing";
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [
        QuestionRouting,
        CommonModule
    ]
})
export class QuestionModule{

}