import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { Question } from 'src/app/services/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonButton, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuizPage implements OnInit {

  public data: DataService = inject(DataService);
  public currentQuestion: Question | undefined;
  public currentNumber: number = -1;
  public shuffledQuestions : Question[] = [];
  public points: number = 0;

  constructor() { }

  ngOnInit() {
    if (this.data.currentQuiz.questions.length > 0) {
      this.shuffledQuestions = this.data.getShuffledQuestions();
      this.currentQuestion = this.shuffledQuestions[0]; 
      this.currentNumber = 0;
    } 
  }

  getNextQuestion(): boolean {
    if (this.currentNumber < this.shuffledQuestions.length - 1) {
      this.currentNumber++;
      this.currentQuestion = this.shuffledQuestions[this.currentNumber];
      return true
    } else 
        return false;
  }

  public Antwort(a: number) {
    if (this.currentQuestion && this.currentQuestion.correct === a) {
      this.points++;
    }
    if (this.getNextQuestion()) {
      console.log('Next question');
    } else {
      this.currentNumber = -1;
      console.log('Quiz finished');
    }
  }

}
