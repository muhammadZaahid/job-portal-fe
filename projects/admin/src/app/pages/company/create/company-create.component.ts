import { Component } from "@angular/core";
import { NonNullableFormBuilder } from "@angular/forms";
import { FileReqDto } from "../../../dto/file/file.req.dto";
import { CompanyService } from "../../../services/company.service";
import { Router } from "@angular/router";

@Component({
    selector: 'company-create',
    templateUrl: './company-create.component.html'
})
export class CompanyCreateComponent {

    companyLogoReq = this.fb.group({
        files: [''],
        fileFormat: ['']
    })

    companyBannerReq = this.fb.group({
        files: [''],
        fileFormat: ['']
    })

    companyInsertReqDto = this.fb.group({
        companyName: [''],
        companyDesc: [''],
        companyTaxNumber: [''],
        companyLogo: this.companyLogoReq,
        companyBanner: this.companyBannerReq
    })

    constructor(
        private companyService : CompanyService,
        private router : Router,
        private fb: NonNullableFormBuilder
    ) {}

    onAdd(){
        if(this.companyInsertReqDto.valid){
            const request = this.companyInsertReqDto.getRawValue()
            this.companyService.addCompany(request).subscribe(result =>{
                this.router.navigateByUrl("/admin/company")
                console.log(result)
            })
        }else{
            console.log('Invalid')
        }
    }

    fileUploadLogo(event: any) {
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

                this.companyLogoReq.patchValue({
                    files : resultBase64,
                    fileFormat : resultExtension
                })


                this.companyLogoReq
                console.log(resultBase64)
                console.log(resultExtension)
            })
        }
    }

    fileUploadBanner(event: any) {
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

                this.companyBannerReq.patchValue({
                    files : resultBase64,
                    fileFormat : resultExtension
                })

                this.companyBannerReq
                console.log(resultBase64)
                console.log(resultExtension)
            })
        }
    }
}