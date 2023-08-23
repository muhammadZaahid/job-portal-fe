import { QuestionInsertReqDto } from "./question-insert.req.dto"

export interface QuestionTopicInsertReqDto {
    topicTitle : string
    questions : QuestionInsertReqDto[]
}