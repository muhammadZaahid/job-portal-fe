import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api/menuitem";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

    items : MenuItem[] | undefined
    constructor(
        private router : Router
    ){}

    ngOnInit(): void {
        this.items = [          
            {
                label : 'Search Job',
                icon : 'pi pi-search',
                routerLink : '/candidate/jobvacancy'
            },
            {
                label : 'Profile',
                routerLink : '/candidate/profile'
            },
            {
                label : 'Application',
                routerLink : '/candidate/application'
            },
            {
                icon : 'pi pi-user',
                items: [
                    {
                        label: 'Sign In',
                        icon: 'pi pi-sign-in'
                    }
                ],
                style : {'right': '0'}
            }

        ]            
    }

    onLogOut(){
        localStorage.clear()
        this.router.navigateByUrl('/login')
    }
}