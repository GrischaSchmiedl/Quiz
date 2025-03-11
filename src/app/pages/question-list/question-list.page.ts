import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Question } from 'src/app/services/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.page.html',
  styleUrls: ['./question-list.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class QuestionListPage implements OnInit {

  private router = inject(Router);
  public data = inject(DataService);

  constructor() { }

  ngOnInit() {
  }
  show(qid: string) {
    this.router.navigate(["/question", qid]);
  }
  deleteQuestion(q: Question) {
    //this.data.deleteQuestion(q);
  }
}
