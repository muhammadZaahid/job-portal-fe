import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { AuthService } from "./auth.service";
import { MessageService } from "primeng/api";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class BaseService {

    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private messageService: MessageService,
        private router: Router
    ) { }

    private get token(): string | null {
        const profile = this.authService.getProfile()
        if (profile && profile.token) {
            return profile.token
        }
        return null
    }

    private get header() {
        return {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }
    }

    post<T>(url: string, body: any, withToken = true): Observable<T> {
        return this.http.post<T>(url, body, (withToken ? this.header : undefined))
            .pipe(response(this.messageService, this.router))
    }

    patch<T>(url: string, body: any, withToken = true): Observable<T> {
        return this.http.patch<T>(url, body, (withToken ? this.header : undefined))
            .pipe(response(this.messageService, this.router))
    }

    get<T>(url: string, withToken = true): Observable<T> {
        return this.http.get<T>(url, (withToken ? this.header : undefined))
            .pipe(response(this.messageService, this.router))
    }
    
}

function response<T>(
    messageService: MessageService,
    router: Router
) {
    return tap<T>({
        next: (data) => {
            if (data && (data as any).message) {
                messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: (data as any).message
                })
            }
        },
        error: (err) => {
            if (err instanceof HttpErrorResponse) {

                messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: err.error.message
                })

                if (err.status == 401 && err.error.message === 'token expired') {
                    console.log('token expired')
                    router.navigateByUrl('/login')
                    localStorage.clear()
                }
            }
        }
    })
}