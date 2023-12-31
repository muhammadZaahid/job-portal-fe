import { FileReqDto } from "../file/file.req.dto"

export interface UserResDto {
	id : string
	nik : string
	name : string
	email : string
	phone : string
	birthPlace : string
	birthDate : string
	socmed1 : string
	socmed2 : string
	socmed3 : string
	experienceYear : number
	salaryExpectation : number
	photoId : string
	resumeId : string
	photo : FileReqDto
	resume : FileReqDto
}