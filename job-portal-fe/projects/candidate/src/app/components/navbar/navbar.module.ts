import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar.component";
import {MenubarModule} from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";

@NgModule({
    declarations : [
        NavbarComponent
    ],
    imports : [
        RouterModule,
        CommonModule,
        MenubarModule,
        TabMenuModule,
        ButtonModule,
        CardModule
    ],
    exports : [
        NavbarComponent
    ]
})
export class NavbarModule{

}