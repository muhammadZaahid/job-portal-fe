import { QuestionAssessmentAnswerReqDto } from "./question-assessment-answer.req.dto"

export interface QuestionSubmitAssessmentReqDto {
    applicantId : string
    answers : QuestionAssessmentAnswerReqDto[]
}