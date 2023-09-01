import { FileReqDto } from "../file/file.req.dto"

export interface CompanyDetailResDto {
    id : string
	companyCode : string
	companyName : string
	companyDesc : string
	companyTaxNumber : string
    companyLogo : FileReqDto
	companyBanner : FileReqDto
}