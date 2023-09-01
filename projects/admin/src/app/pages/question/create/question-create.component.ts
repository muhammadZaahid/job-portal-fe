import { Component } from "@angular/core";
import { QuestionService } from "../../../services/question.service";
import { Router } from "@angular/router";
import { FormArray, NonNullableFormBuilder } from "@angular/forms";
import { QuestionInsertReqDto } from "../../../dto/question/question-insert.req.dto";
import { QuestionTopicInsertReqDto } from "../../../dto/question/question-topic-insert.req.dto";
import { QuestionAnswerReqDto } from "../../../dto/question/question-answer.req.dto";

@Component({
    selector : 'question-create',
    templateUrl : './question-create.component.html'
})
export class QuestionCreateComponent{

    questionInsertReqDto : QuestionInsertReqDto[] = []
    optionInsertReqDto : QuestionAnswerReqDto[] = []
    correct = false

    constructor(
        private questionService : QuestionService,
        private router : Router,
        private fb : NonNullableFormBuilder
    ){}

    questionTopicInsertReqDto = this.fb.group({
        topicTitle : [''],  
        questions : this.fb.array(this.questionInsertReqDto)              
    })

    get questions(){
        return this.questionTopicInsertReqDto.get('questions') as FormArray
    }

    onAddQuestion(){
        this.questions.push(
            this.fb.group({
                questionDesc :[''],
                options: this.fb.array(this.optionInsertReqDto)
            })
        )
    }

    options(optionIndex : number){
        return this.questions.at(optionIndex).get('options') as FormArray
    }

    onAddOption(optionIndex : number){
        this.options(optionIndex).push(
            this.fb.group({
                answerText: [''],
                isCorrect: [false]
            })            
        )
    }
    // toggleCorrect(indexOption : number){
    //     for(let i =0;i<this.options.length;i++) {
    //         if(i !== indexOption){
    //             this.optionInsertReqDto.at(indexOption).({
                    
    //             })
    //         }
    //     }
    // }
    removeQuestion(i : number){
        this.questions.removeAt(i)
    }

    removeOption(i : number, questionIndex : number){
        this.options(questionIndex).removeAt(i)
    }

    onAdd(){
        if(this.questionTopicInsertReqDto.valid){
            const request = this.questionTopicInsertReqDto.getRawValue()
            this.questionService.addTopic(request).subscribe(result =>{
                this.router.navigateByUrl("/admin/question")
                console.log(result)
            })
        }else{
            console.log('Invalid')
        }
    }
}