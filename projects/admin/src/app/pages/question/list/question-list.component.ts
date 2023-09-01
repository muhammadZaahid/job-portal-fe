import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { QuestionService } from "../../../services/question.service";
import { QuestionTopicResDto } from "../../../dto/question/question-topic.res.dto";

@Component({
    selector : 'question-list',
    templateUrl : './question-list.component.html'
})
export class QuestionListComponent implements OnInit{

    topics : QuestionTopicResDto[] = []

    constructor(
        private authService : AuthService,
        private questionService : QuestionService,
        private router : Router
    ){}

    ngOnInit(): void {
        const profile = this.authService.getProfile()
        const token = profile?.token
        if(profile && token){
            this.getTopics()
        }else{
            console.log('Invalid')
        }

    }

    getTopics(){
        this.questionService.getTopics().subscribe(result =>{
            this.topics = result
        })
    }
}