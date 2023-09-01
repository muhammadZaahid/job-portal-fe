import { FileReqDto } from "../file/file.req.dto"

export interface CompanyUpdateReqDto {
	companyId : string
	companyName : string
	companyDesc : string
	companyTaxNumber : string
	companyLogo : FileReqDto
	companyBanner : FileReqDto
}