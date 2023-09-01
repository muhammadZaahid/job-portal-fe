export interface JobVacancyDetailResDto {
	id : string
    code : string
    title : string
    companyName : string
    jobLevelName : string
    location : string
    startDate : string
    endDate : string
    benefitDesc : string
    jobDesc : string
    salaryPublish : boolean
    salaryFrom : number
    salaryTo : number
    hasApplied : boolean
}