import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  public data = inject(DataService); //inject the DataService into the data property - new alternative to using the constructor
  private router = inject(Router); //inject the Router into the router property - new alternative to using the constructor
  
  constructor() {}

  startTest() { this.router.navigate(["/quiz"]); }
  showList() { this.router.navigate(["/question-list"]); }
}
