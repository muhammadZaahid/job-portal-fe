import { FileReqDto } from "../file/file.req.dto"

export interface MedicalInsertReqDto {
    applicantId: string
    medicalLocation: string
    medicalDate: string
    medicalNotes: string
    medicalFile: FileReqDto
}