import { FileReqDto } from "../file/file.req.dto"

export interface MedicalResDto{
    medicalLocation: string
    medicalDate: string
    medicalNotes: string
    medicalFile: FileReqDto
}