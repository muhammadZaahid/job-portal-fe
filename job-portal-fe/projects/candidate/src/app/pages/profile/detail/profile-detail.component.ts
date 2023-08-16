import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector : 'profile-detail',
    templateUrl : './profile-detail.component.html'
})
export class ProfileDetailComponent implements OnInit{

    resumeMenuItems: MenuItem[] | undefined;

    ngOnInit(): void {
        this.resumeMenuItems = [
            {
                label : 'View'
            },
            {
                label : 'Download'
            }            
        ]
    }

}