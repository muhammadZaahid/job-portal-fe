import { RouterModule, Routes } from "@angular/router";
import { CompanyListComponent } from "./list/company-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { CompanyCreateComponent } from "./create/company-create.component";
import { DividerModule } from "primeng/divider";
import { InputTextModule } from "primeng/inputtext";
import { FileUploadModule } from "primeng/fileupload";
import { ReactiveFormsModule } from "@angular/forms";
import { CompanyUpdateComponent } from "./update/company-update.component";


const routes : Routes = [
    {
        path : '',
        component : CompanyListComponent
    },
    {
        path : 'add',
        component : CompanyCreateComponent
    },
    {
        path : 'edit/:id',
        component : CompanyUpdateComponent
    }
]

@NgModule({
    declarations : [
        CompanyListComponent,
        CompanyCreateComponent,
        CompanyUpdateComponent
    ],
    imports : [
        RouterModule.forChild(routes),
        CommonModule,
        TableModule,
        CardModule,
        ButtonModule,
        DividerModule,
        InputTextModule,
        FileUploadModule,
        ReactiveFormsModule
    ],
    exports : [
        RouterModule,
        CompanyListComponent,
        CompanyCreateComponent,
        CompanyUpdateComponent
    ]
})
export class CompanyRouting{

}