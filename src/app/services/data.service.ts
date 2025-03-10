import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //initialize the currentQuiz property with a new quiz object
  public currentQuiz: Quiz = {id: '', quizName: 'newQuiz', questions: []};

  constructor() {
    //add a question to the currentQuiz property
    this.currentQuiz.questions.push({
      id: '1',
      title: 'What is the capital of France?',
      a1: 'New York',
      a2: 'London',
      a3: 'Paris',
      a4: 'Dublin',
      correct: 3
    });
   }
}
