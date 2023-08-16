import { Component } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
    selector : 'profile-update',
    templateUrl : './profile-update.component.html'
})
export class ProfileUpdateComponent{
    
    resumeMenuItems: MenuItem[] | undefined;
    date: Date[] | undefined;

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