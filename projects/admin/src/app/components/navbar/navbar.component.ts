import { Component, HostListener, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api/menuitem";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

    items : MenuItem[] | undefined
    isMobile: boolean = false;
    styleRightItem! : string

    constructor(
        private authService : AuthService,
        private router : Router
    ){}

    ngOnInit(): void {
        this.checkWindowSize();
        if(this.isMobile){
            this.styleRightItem =''
      
        }else{
            this.styleRightItem ='absolute'
        }
        const profile = this.authService.getProfile()
        if(profile){

           
            this.items = [
                {
                    label : 'Yukkerja',
                    routerLink : '/dashboard'                    
                },
                {
                    label: 'Master Data',
                    icon: 'pi pi-fw pi-file',
                    items: [
                        {
                            label: 'Company',
                            icon: 'pi pi-fw pi-building',
                            routerLink: '/admin/company'
                        },
                        {
                            label : 'User',
                            icon : 'pi pi-fw pi-users',
                            routerLink: '/admin/user'
                        },   
                        {
                            label: 'Job Vacancy',
                            icon: 'pi pi-fw pi-briefcase',
                            routerLink: '/admin/job-vacancy'
                        },                    
                        {
                            label: 'Candidate',
                            icon: 'pi pi-fw pi-user',
                            routerLink: '/admin/candidate'
                        },                                           
                        {
                            label: 'Applicant',
                            icon: 'pi pi-fw pi-user',
                            routerLink: '/admin/applicant'
                        },
                        {
                            label: 'Question',
                            icon: 'pi pi-fw pi-file-edit',
                            routerLink: '/admin/question'
                        }
                    ]
                },
                {
                    label: 'Report',
                    icon : 'pi pi-fw pi-file-export',
                    items :[
                        {
                            label: 'Applicant',
                            icon: 'pi pi-fw pi-user',
                            routerLink: '/admin/report/applicant'
                        }
                    ]
                },                
                {
                    label: profile.profileName,
                    icon: 'pi pi-fw pi-user',                                     
                    style : { 'top': '1', 'right' : '0', 'position' : this.styleRightItem },                   
                
                    items : [    
                        {
                            label: 'View Profile',
                            icon: 'pi pi-fw pi-external-link',
                            routerLink: '/profile'                        
                        },                    
                        {
                            label: 'Change Password',
                            icon: 'pi pi-fw pi-external-link',
                            routerLink: '/profile/change-password'
                        },
                        {
                            label: 'Logout',
                            icon: 'pi pi-fw pi-sign-out',
                            command: () => this.onLogOut()
                        }
                
                    ]
                }
            ]
        }
    }

    onLogOut(){
        localStorage.clear()
        this.router.navigateByUrl('/login')
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: Event) {
        this.checkWindowSize();
    }

    checkWindowSize() {
        const mobileBreakpoint = 768;
        this.isMobile = window.innerWidth < mobileBreakpoint;
    }
}