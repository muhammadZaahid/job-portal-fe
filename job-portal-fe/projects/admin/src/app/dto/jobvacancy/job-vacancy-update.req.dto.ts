export interface JobVacancyUpdateReqDto {
	jobVacancyId : string
	title : string
    picId : string
    jobLevelId : string
    location : string
    benefitDesc : string
    salaryFrom : number
    salaryTo : number
    salaryPublish : boolean
    startDate : string
    endDate : string
}