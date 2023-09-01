import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CandidateResDto } from "../../../dto/candidate/candidate.res.dto";
import { CandidateService } from "../../../services/candidate.service";
import { AuthService } from "../../../services/auth.service";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { ApplicantService } from "../../../services/applicant.service";
import { ApplicantDetailResDto } from "../../../dto/applicant/applicant-detail.res.dto";
import { AssessementService } from "../../../services/assessement.service";
import { AssessmentResDto } from "../../../dto/assessement/assessment.res.dto";
import { ConfirmationService, MenuItem } from "primeng/api";
import { InterviewResDto } from "../../../dto/interview/interview.res.dto";
import { NonNullableFormBuilder, Validators } from "@angular/forms";
import { InterviewService } from "../../../services/interview.service";
import { MedicalService } from "../../../services/medical.service";
import { MedicalResDto } from "../../../dto/medical/medical.res.dto";
import { FileReqDto } from "../../../dto/file/file.req.dto";
import { FileUpload } from "primeng/fileupload";
import { OfferService } from "../../../services/offer.service";
import { OfferingResDto } from "../../../dto/offer/offering.res.dto";

@Component({
    selector: 'applicant-detail',
    templateUrl: './applicant-detail.component.html',
    providers: [ConfirmationService]
})
export class ApplicantDetailComponent implements OnInit {

    applicantDetail!: ApplicantDetailResDto
    candidate!: CandidateResDto
    assessment!: AssessmentResDto
    resumeMenuItems: MenuItem[] | undefined
    interview!: InterviewResDto
    medical!: MedicalResDto
    offers!: OfferingResDto
    venues: String[] | undefined
    interviewDate!: Date
    medicalDate!: Date
    file!: FileReqDto
    imageUrl! : string

    stageApplication = false
    stageAssessement = false
    stageInterview = false
    stageMcu = false
    stageOffer = false
    hasMedical = false

    visible: boolean = false
    medicalVisible = false
    offerVisible = false

    constructor(
        private candidateService: CandidateService,
        private applicantService: ApplicantService,
        private assessementService: AssessementService,
        private interviewService: InterviewService,
        private medicalService: MedicalService,
        private offerService: OfferService,
        private authService: AuthService,
        private activatedRoute: ActivatedRoute,
        private confirmationService: ConfirmationService,
        private router: Router,
        private fb: NonNullableFormBuilder,
        private cd: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token
        const applicantId = this.activatedRoute.snapshot.params['id']
        if (profile && token) {
            this.getApplicantDetail(applicantId)
            this.resumeMenuItems = [
                {
                    label: 'View'
                },
                {
                    label: 'Download',
                    url: 'http://localhost:8080/admin/file/a6e54e96-be79-4bb9-98ff-5f59c33a0561',
                    target: '_self'
                }
            ]
            this.venues = ["Online", "Offline"]
        } else {
            console.log('Invalid')
        }
    }

    interviewReqDto = this.fb.group({
        applicantId: ['', Validators.required],
        interviewVenue: ['', Validators.required],
        interviewTime: ['', Validators.required],
        interviewLocation: ['', Validators.required]
    })

    fileReqDto = this.fb.group({
        files: ['', Validators.required],
        fileFormat: ['', Validators.required]
    })

    medicalReqDto = this.fb.group({
        applicantId: ['', Validators.required],
        medicalLocation: ['', Validators.required],
        medicalDate: ['', Validators.required],
        medicalNotes: ['', Validators.required],
        medicalFile: this.fileReqDto
    })

    offeringReqDto = this.fb.group({
        applicantId: ['',Validators.required],
        offerSalary: [0,Validators.required]
    })

    getApplicantDetail(applicantId: string) {
        this.applicantService.getApplicantDetail(applicantId).subscribe(result => {
            console.log(result)
            this.applicantDetail = result
            this.getCandidate(result.candidateId)
            if (result.assessment) {
                this.getAssessment(applicantId)
            }
            if (result.interview) {
                this.getInterview(applicantId)
            }
            if (result.mcu) {
                this.getMedical(applicantId)
            }
            if (result.offer){
                this.getOffer(applicantId)
            }
            this.checkCurrentStage(result.currentStage)
            this.cd.detectChanges()
        })
    }

    get appDetails(){
        return (this.applicantDetail)
    }

    get stagesMcu(){
        return (this.applicantDetail && this.applicantDetail.mcu) ? this.applicantDetail.mcu : null
    }

    getCandidate(candidateId: string) {
        this.candidateService.getCandidate(candidateId).subscribe(result => {
            this.candidate = result
            this.imageUrl = `http://localhost:8080/admin/file/${result.photoId}`
            console.log(`${this.imageUrl}`)
            this.cd.detectChanges()
        })
    }

    getAssessment(applicantId: string) {
        this.assessementService.getAssessment(applicantId).subscribe(result => {
            this.assessment = result
            this.cd.detectChanges()
        })
    }

    getInterview(applicantId: string) {
        this.interviewService.getInterview(applicantId).subscribe(result => {
            this.interview = result
            this.cd.detectChanges()
        })
    }

    getMedical(applicantId: string) {
        this.medicalService.getMedical(applicantId).subscribe({
            next: (result) => {
                this.medical = result
                this.hasMedical = true
                this.cd.detectChanges()
            },
            error: () => {
                this.hasMedical = false
            }
        })
    }

    getOffer(applicantId: string){
        this.offerService.getOffer(applicantId).subscribe(result =>{
            this.offers = result;
            this.cd.detectChanges()
        })
    }

    changeStage(applicantId: string) {
        this.applicantService.changeStage(applicantId).subscribe(result => {
            console.log(result)
            this.getApplicantDetail(applicantId)
            this.cd.detectChanges()
        })
    }

    confirmMoveToAssessment() {
        const applicantId = this.activatedRoute.snapshot.params['id']
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirm Move to Assessment',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.changeStage(applicantId)
                this.stageApplication = false
            },
            reject: () => {

            }
        });
    }

    insertInterviewModal() {
        this.visible = true
        this.interviewReqDto.patchValue({
            applicantId: this.activatedRoute.snapshot.params["id"]
        })
    }

    insertMedicalModal() {
        this.medicalVisible = true
        this.medicalReqDto.patchValue({
            applicantId: this.activatedRoute.snapshot.params["id"]
        })
    }

    insertOfferModal(){
        this.offerVisible = true
        this.offeringReqDto.patchValue({
            applicantId: this.activatedRoute.snapshot.params["id"]
        })
    }

    checkCurrentStage(currentStage: string) {
        if (currentStage == 'application') {
            this.stageApplication = true
        }
        else if (currentStage == 'assessment') {
            this.stageAssessement = true
        } else if (currentStage == 'interview') {
            this.stageInterview = true
        } else if (currentStage == 'mcu') {
            this.stageMcu = true
        } else if (currentStage == 'offer') {
            this.stageOffer = true
        }
    }
    onSelectDate() {
        this.interviewReqDto.patchValue({
            interviewTime: this.interviewDate.toString()
        })
    }
    onAddInterview() {
        if (this.interviewReqDto.valid) {
            const data = this.interviewReqDto.getRawValue()
            this.interviewService.insertInterview(data).subscribe(result => {
                console.log(result)
                this.getApplicantDetail(data.applicantId)
                this.interviewReqDto.reset()
                this.stageAssessement = false
                this.visible = false
            })
        }
    }

    onAddMedical() {
        if (this.medicalReqDto.valid) {
            const data = this.medicalReqDto.getRawValue()
            this.medicalService.insertMedical(data).subscribe({
                next: (result) => {
                    this.medicalReqDto.reset()
                    this.fileReqDto.reset()
                    this.medicalVisible = false
                    this.getApplicantDetail(data.applicantId)
                },
                error: () => {
                    this.medicalReqDto.reset()
                    this.fileReqDto.reset()
                    this.medicalVisible = false
                }
            })
        }
    }

    onAddOffer() {
        if (this.offeringReqDto.valid) {
            const data = this.offeringReqDto.getRawValue()
            this.offerService.insertOffer(data).subscribe({
                next: (result) => {
                    this.offeringReqDto.reset()
                    this.offerVisible = false
                    this.updateApplicant(data.applicantId)
                },
                error: () => {
                    this.offeringReqDto.reset()
                    this.offerVisible = false
                }
            })
        }
    }

    updateApplicant(applicantId : string){
        this.applicantService.updateApplicant(applicantId).subscribe(result =>{
            this.getApplicantDetail(applicantId);
            this.cd.detectChanges()
        })
    }

    confirmMoveToMcu() {
        const applicantId = this.activatedRoute.snapshot.params['id']
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirm Move to MCU',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.changeStage(applicantId)
                this.getApplicantDetail(applicantId)
                this.stageInterview = false
            },
            reject: () => {

            }
        });
    }
    confirmMoveToHired() {
        const applicantId = this.activatedRoute.snapshot.params['id']
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirm Move to Hired',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.changeStage(applicantId)
                this.getApplicantDetail(applicantId)
                this.stageOffer = false
            },
            reject: () => {

            }
        });
    }
    
    fileUploadMedical(event: any, fileM: FileUpload) {

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
                this.fileReqDto.patchValue({
                    files: resultBase64,
                    fileFormat: resultExtension
                })
            })
            fileM.clear()
        }
    }
    setDefaultPic(){
        this.imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSorWw_NxS1hwieUhifQH2Fb0WkFQiQtWwafg&usqp=CAU"
    }
}