import { Component } from '@angular/core';
const prenotazione = document.getElementById('prenota') as HTMLInputElement;
const nome = document.getElementById('nome') as HTMLInputElement;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  private value: any;
  private style: CSSStyleDeclaration;
  bottoni = [];
  bottoni1 = [];
  constructor(){
    this.bottoni = Array(71).fill(0).map((x,i)=>i);
    this.bottoni1 = Array(25).fill(0).map((x,i)=>i);
    /*for(var i=0; i<this.bottoni.length; i++){
      this.bottoni[i].value.addEventListener('click', this.selezionaPosto);
    }*/
  };
selezionaPosto(){
    if (prenotazione.value!=="") {
      this.value = prenotazione.value;
      this.style.color = "red";
      prenotazione.value="";
    }
    else
      nome.innerHTML = this.value;
  };
toArray() { //funzione che trasforma l'array di bottoni in un array di stringhe
    return this.bottoni.map((fila) =>
      fila.map( x => x.value)
    );
  };
}

var comments = document.getElementsByClassName('button');
var numComments = comments.length;

function showComment() {
  var place = document.getElementById('textfield');
  var commentBox = document.createElement('textarea');
  place.appendChild(commentBox);
}

for (var i = 0; i < numComments; i++) {
  comments[i].addEventListener('click', showComment, false);
}