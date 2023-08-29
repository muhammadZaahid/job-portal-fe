import { FileReqDto } from "../file/file.req.dto"

export interface UserUpdateReqDto {
	id : string
    nik : string
	name : string
	phone : string
	birthPlace : string
	birthDate : string
	socmed1 : string
	socmed2 : string
	socmed3 : string
	experienceYear : number
	salaryExpectation : number
	photo : FileReqDto
	resume : FileReqDto
}