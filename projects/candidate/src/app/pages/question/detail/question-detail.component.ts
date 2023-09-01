import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormArray, NonNullableFormBuilder, Validators } from "@angular/forms";
import { QuestionAssessmentAnswerReqDto } from "@candidateDto/question/question-assessment-answer.req.dto";
import { QuestionsResDto } from "@candidateDto/question/question.res.dto";
import { AuthService } from "@candidateServices/auth.service";
import { QuestionService } from "@candidateServices/question.service";

@Component({
    selector: 'question-detail',
    templateUrl: './question-detail.component.html'
})
export class QuestionDetailComponent implements OnInit {

    questions: QuestionsResDto[] = []
    answer: QuestionAssessmentAnswerReqDto[] = []

    constructor(
        private authService: AuthService,
        private questionService: QuestionService,
        private activatedRoute: ActivatedRoute,
        private fb: NonNullableFormBuilder,
        private router: Router
    ) { }

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token
        const candidateId = profile!.candidateId
        if (profile && token) {
            const topicId = this.activatedRoute.snapshot.params['topicId']
            const jobVacancyId = this.activatedRoute.snapshot.params['jobVacancyId']
            this.getQuestionTopic(topicId, candidateId, jobVacancyId)
        }
    }

    submitAssessmentReq = this.fb.group({
        applicantId: [''],
        answers: this.fb.array(this.answer)
    })

    submitAnswerReq = this.fb.group({
        questionId: [''],
        answerId: ['']
    })

    get answers() {
        return this.submitAssessmentReq.get('answers') as FormArray
    }

    answerIndex!: number
    questionIndex!: number

    getAnswerIndex(questionIndex: number, answerIndex: number) {
        this.answerIndex = answerIndex
        this.questionIndex = questionIndex
    }

    getQuestionTopic(topicId: string, candidateId: string, jobVacancyId: string) {
        this.questionService.getQuestions(topicId, candidateId, jobVacancyId).subscribe(result => {
            this.questions = result
            for (let i = 0; i < this.questions.length; i++) {
                this.submitAssessmentReq.patchValue({
                    applicantId: this.questions[i].applicantId
                })
                this.answers.push((this.fb.group({
                    questionId: [this.questions[i].questionId, Validators.required],
                    answerId: ['']
                })))
            }
        })
    }

    getAnswer(questionIndex: number, answerIndex: number) {
        const answerId = this.questions[this.questionIndex].options[this.answerIndex].answerId
        const question = this.questions[questionIndex];
        const selectedAnswer = question.options[answerIndex];

        question.selectedAnswerId = selectedAnswer.answerId;

        this.answers.at(this.questionIndex).patchValue({
            answerId: answerId
        })

    }

    submitAssessment() {
        const request = this.submitAssessmentReq.getRawValue()
        this.questionService.submitAssessment(request).subscribe(result => {
            console.log(result)
            this.router.navigateByUrl("candidate/application")
        })
    }
}