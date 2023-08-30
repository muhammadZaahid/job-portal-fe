import { QuestionAnswerResDto } from "./question-answer.res.dto"

export interface QuestionsResDto {
    questionDesc : string
    questionId : string
    options : QuestionAnswerResDto[]
}