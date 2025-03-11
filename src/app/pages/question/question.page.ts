import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { Question } from 'src/app/services/question';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class QuestionPage implements OnInit {
  public question!: Question;
  private data = inject(DataService);
  private route = inject(ActivatedRoute);

  constructor() {
  }

  ngOnInit() {
    let questionId = this.route.snapshot.paramMap.get('id') || "new";
    if (questionId === "new") {
      this.question = this.data.getNewQuestion();
    } else {
      this.question = this.data.getQuestion(questionId) || this.data.getNewQuestion();
    }
  }

  setCorrect(i: number) {
    this.question.correct = i;
  }

  ionViewWillLeave() {
    if (this.question.id === '0' && this.question.title.length>2) this.data.addQuestion(this.question); 
    this.data.saveQuiz();
  }
}
