import { Component } from "@angular/core";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "@candidateServices/login.service";

@Component({
    selector : 'login',
    templateUrl : './login.component.html'
})
export class LoginComponent{

    loading = false

    constructor(
        private loginService : LoginService,
        private fb : NonNullableFormBuilder,
        private router : Router
    ){}

    loginReqDto = this.fb.group({
        email : ['', [Validators.required]],
        password : ['', [Validators.required]]
    })

    onLogin(){
        if(this.loginReqDto.valid){
            this.loading = true
            const data = this.loginReqDto.getRawValue()
            this.loginService.login(data).subscribe({
                next : (result) => {
                    this.loading = false
                    localStorage.setItem('data', JSON.stringify(result))
                    this.router.navigateByUrl('/candidate/jobvacancy')
                },
                error : () => {
                    this.loading = false
                }
            })
        }
    }
}