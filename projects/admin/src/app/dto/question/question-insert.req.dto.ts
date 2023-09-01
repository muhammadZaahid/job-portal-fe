import { QuestionAnswerReqDto } from "./question-answer.req.dto"

export interface QuestionInsertReqDto {
    questionDesc : string
    options : QuestionAnswerReqDto[]
}