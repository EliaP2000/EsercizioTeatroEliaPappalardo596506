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
    for(var i=0; i<this.bottoni.length; i++){
      var valoreBottone = this.bottoni[i];
      console.log(this.bottoni[i])
      valoreBottone.addEventListener('click', this.selezionaPosto, false);
    }
    for(var i=0; i<this.bottoni1.length; i++){
      var valoreBottone1 = this.bottoni1[i];
      valoreBottone1.addEventListener('click', this.selezionaPosto, false);
    }
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