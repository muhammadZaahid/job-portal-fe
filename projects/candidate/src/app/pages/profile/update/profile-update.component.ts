import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { FileUpload } from "primeng/fileupload";
import { UserResDto } from "@candidateDto/user/user.res.dto";
import { AuthService } from "@candidateServices/auth.service";
import { UserService } from "@candidateServices/user.service";

@Component({
    selector: 'profile-update',
    templateUrl: './profile-update.component.html'
})
export class ProfileUpdateComponent implements OnInit {

    resumeMenuItems: MenuItem[] | undefined;
    date: Date[] | undefined;
    userDetailRes!: UserResDto
    imageUrl!: string
    newPhoto!: SafeUrl

    constructor(
        private authService: AuthService,
        private userService: UserService,
        private fb: NonNullableFormBuilder,
        private router: Router,
        private sanitizer: DomSanitizer
    ) { }

    userPhoto = this.fb.group({
        files: [''],
        fileFormat: ['']
    })

    userResume = this.fb.group({
        files: [''],
        fileFormat: ['']
    })

    userUpdateReq = this.fb.group({
        id: [''],
        nik: ['',[Validators.required]],
        name: ['',[Validators.required]],
        phone: ['',[Validators.required]],
        birthPlace: ['',[Validators.required]],
        birthDate: ['',[Validators.required]],
        socmed1: [''],
        socmed2: [''],
        socmed3: [''],
        experienceYear: [0,[Validators.required]],
        salaryExpectation: [0,[Validators.required]],
        photo: this.userPhoto,
        resume: this.userResume
    })

    ngOnInit(): void {

        const profile = this.authService.getProfile()
        const token = profile?.token
        this.resumeMenuItems = [
            {
                label: 'View'
            },
            {
                label: 'Download'
            }
        ]
        if (profile && token) {
            this.getUserDetail()
        }
    }

    getUserDetail() {
        this.userService.getUserDetail().subscribe(result => {
            const userId = this.authService.getProfile()?.userId
            // const date = new Date(result.birthDate)
            // const birthDate = new Date(date.getFullYear, date.getMonth, date.getDate)                          
            this.userDetailRes = result
            this.imageUrl = `http://localhost:8081/seeker/file/${result.photoId}`
            this.userUpdateReq.patchValue({
                id: userId,
                nik: result.nik,
                name: result.name,
                phone: result.phone,
                birthPlace: result.birthPlace,
                birthDate: result.birthDate,
                socmed1: result.socmed1,
                socmed2: result.socmed2,
                socmed3: result.socmed3,
                experienceYear: result.experienceYear,
                salaryExpectation: result.salaryExpectation
            })
        })
    }

    onUpdate() {
        if (this.userUpdateReq.valid) {
            const request = this.userUpdateReq.getRawValue()
            this.userService.updateUser(request).subscribe(result => {
                this.router.navigateByUrl("candidate/profile")
                console.log(result)
            })
        } else {
            console.log('Invalid')
        }
    }

    updatePhoto(event: any, fileM: FileUpload) {
        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === "string") resolve(reader.result)
            };
            reader.onerror = error => reject(error);
        });
        for (let file of event.files) {
            toBase64(file).then(result => {
                const resultBase64 = result.substring(result.indexOf(",") + 1, result.length)
                const resultExtension = file.name.substring(file.name.indexOf(".") + 1, file.name.length)

                this.userPhoto.patchValue({
                    files: resultBase64,
                    fileFormat: resultExtension
                })

                this.userPhoto
                this.newPhoto = this.getNewPhoto(resultBase64)
            })
        }
        fileM.clear()
    }

    updateResume(event: any) {
        const toBase64 = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === "string") resolve(reader.result)
            };
            reader.onerror = error => reject(error);
        });
        for (let file of event.files) {
            toBase64(file).then(result => {
                const resultBase64 = result.substring(result.indexOf(",") + 1, result.length)
                const resultExtension = file.name.substring(file.name.indexOf(".") + 1, file.name.length)

                this.userResume.patchValue({
                    files: resultBase64,
                    fileFormat: resultExtension
                })

                this.userResume
            })
        }
    }

    formatDate(event: any): string {
        const toString = (date: number, padLength: number): string => {
            return date.toString().padStart(padLength, '0');
        };

        const formattedDate =
            toString(event.getFullYear(), 4) +
            '-' + toString(event.getMonth() + 1, 2) +
            '-' + toString(event.getDate(), 2);

        return formattedDate;
    }

    birthDate(event: any) {
        const formattedDate = this.formatDate(event);
        this.userUpdateReq.patchValue({
            birthDate: formattedDate
        });
    }

    getNewPhoto(base64: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'
            + base64);
    }

    setDefaultPic() {
        this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorWw_NxS1hwieUhifQH2Fb0WkFQiQtWwafg&usqp=CAU"
    }
}