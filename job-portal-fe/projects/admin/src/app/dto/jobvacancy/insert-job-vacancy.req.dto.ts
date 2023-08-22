export interface InsertJobVacancyReqDto {
    title : string
    picId : string
    companyId : string
    jobLevelId : string
    location : string
    benefitDesc : string
    salaryFrom : number
    salaryTo : number
    salaryPublish : boolean
    startDate : string
    endDate : string
}