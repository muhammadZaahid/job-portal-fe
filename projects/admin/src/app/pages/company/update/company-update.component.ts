import { Component, OnInit } from "@angular/core";
import { NonNullableFormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CompanyService } from "../../../services/company.service";
import { CompanyDetailResDto } from "../../../dto/company/company-detail.res.dto";

@Component({
    selector : 'company-update',
    templateUrl : './company-update.component.html'
})
export class CompanyUpdateComponent implements OnInit{

    companyDetailResDto! : CompanyDetailResDto

    companyLogoReq = this.fb.group({
        files: [''],
        fileFormat: ['']
    })

    companyBannerReq = this.fb.group({
        files: [''],
        fileFormat: ['']
    })

    companyUpdateReqDto = this.fb.group({
        companyId: [''],
        companyName: [''],
        companyDesc: [''],
        companyTaxNumber: [''],
        companyLogo: this.companyLogoReq,
        companyBanner: this.companyBannerReq
    })

    constructor(
        private companyService : CompanyService,
        private router : Router,
        private fb: NonNullableFormBuilder,
        private activatedRoute : ActivatedRoute
    ) {}

    ngOnInit(): void {
        const companyId = this.activatedRoute.snapshot.params['id'];
        this.getCompanyById(companyId)           
    }

    onUpdate(){
        if(this.companyUpdateReqDto.valid){
            const request = this.companyUpdateReqDto.getRawValue()
            this.companyService.updateCompany(request).subscribe(result =>{
                this.router.navigateByUrl("/admin/company")
                console.log(result)
            })
        }else{
            console.log('Invalid')
        }
    }

    getCompanyById(id : number){
        this.companyService.getCompany(id).subscribe(result =>{
            console.log(result)               
            this.companyUpdateReqDto.patchValue({
                companyId : result.id,
                companyName : result.companyName,
                companyDesc : result.companyDesc,
                companyTaxNumber : result.companyTaxNumber,
                companyLogo : result.companyLogo,
                companyBanner : result.companyBanner
             
            })
            
        })
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