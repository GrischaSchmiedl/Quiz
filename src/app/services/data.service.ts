import { Injectable } from '@angular/core';
import { Quiz } from './quiz';
import { Question } from './question';
import { v4 as uuidv4 } from 'uuid'; 
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //initialize the currentQuiz property with a new quiz object
  public currentQuiz: Quiz = {id: '', quizName: 'newQuiz', questions: []};

  constructor() {
    //add a question to the currentQuiz property
    /*for (let i=1; i<50; i++) {
      this.currentQuiz.questions.push({
        //id: '1',
        id: i.toString(),
        title: 'What is the capital of France?',
        a1: 'New York',
        a2: 'London',
        a3: 'Paris',
        a4: 'Dublin',
        correct: 3
      });
    }*/
    this.loadQuiz();
  }

  getQuestion(questionId: string): Question | undefined {
    return this.currentQuiz.questions.find(q => q.id === questionId);
  }
  getNewQuestion(): Question {
    return {id: '0', title: '', a1: '', a2: '', a3: '', a4: '', correct: 1};
  }

  deleteQuestion(q: Question) {
    this.currentQuiz.questions = this.currentQuiz.questions.filter(question => question.id !== q.id);
    this.saveQuiz();
  }

  addQuestion(q: Question) {
    // add id by using uuid4
    q.id = uuidv4();
    this.currentQuiz.questions.push(q);
    this.saveQuiz();
  }

  saveQuiz(){
    Preferences.set({
      key: 'quiz', 
      value: JSON.stringify(this.currentQuiz)
    }).then(() => {
      console.log('Quiz saved');
    }).catch((error) => {
      console.error('Error saving quiz', error);
    });
  }

  async loadQuiz(){ 
    const someObject = await Preferences.get({ key: 'quiz' });
    if (someObject.value) {
      this.currentQuiz = JSON.parse(someObject.value);
    }
  }

}
