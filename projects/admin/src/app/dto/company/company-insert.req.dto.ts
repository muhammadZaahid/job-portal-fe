import { FileReqDto } from "../file/file.req.dto"

export interface CompanyInsertReqDto {
	companyName : string
	companyDesc : string
	companyTaxNumber : string
	companyLogo : FileReqDto
	companyBanner : FileReqDto
}