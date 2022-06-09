import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Esercizio Angular';
  constructor(){
    this.cities = Array(5).fill().map((x,i)=>i);
    this.cities = Array(5).fill(4);
  }
  cities = [
    {
      nome: 'Torino',
      temperatura: '14'
    }, {
      nome: 'Milano',
      temperatura: '15'
    }, {
      nome: 'Genova',
      temperatura: '18'
    }
  ];
}
/*export class SampleComponent {
  constructor() {
    this.cities = Array(5).fill().map((x,i)=>i); // [0,1,2,3,4]
    this.numbers = Array(5).fill(4); // [4,4,4,4,4]
  }
}*/
