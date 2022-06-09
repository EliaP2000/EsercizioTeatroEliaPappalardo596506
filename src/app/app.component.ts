import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Esercizio Angular';
  bottoni = []
  constructor(){
    this.bottoni = Array(10).fill(7).map((x,i)=>i);
  }
}
