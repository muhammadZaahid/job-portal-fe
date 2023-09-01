import { QuestionAnswerResDto } from "./question-answer.res.dto"

export interface QuestionsResDto {
    selectedAnswerId: string
    applicantId : string
    questionDesc : string
    questionId : string
    options : QuestionAnswerResDto[]
}