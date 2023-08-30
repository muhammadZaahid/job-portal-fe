import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { QuestionsResDto } from "../../../dto/question/question.res.dto";
import { QuestionService } from "../../../services/question.service";
import { ActivatedRoute } from "@angular/router";
import { QuestionAnswerResDto } from "../../../dto/question/question-answer.res.dto";

@Component({
    selector : 'question-detail',
    templateUrl : './question-detail.component.html'
})
export class QuestionDetailComponent implements OnInit{

    questions : QuestionsResDto[] = []
    selectedAnswer! : QuestionAnswerResDto

    constructor(
        private authService : AuthService,
        private questionService : QuestionService,
        private activatedRoute : ActivatedRoute
    ){}

    

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token
        if(profile && token){
            const topicId = this.activatedRoute.snapshot.params['id']  
            this.getQuestionTopic(topicId)                      
        }
    }

    getQuestionTopic(topicId : string){
        this.questionService.getQuestions(topicId).subscribe(result=>{
            this.questions = result            
        })
    }

    submitAnswer(){}

}