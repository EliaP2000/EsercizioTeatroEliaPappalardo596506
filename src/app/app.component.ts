import { Component } from '@angular/core';
const prenotazione = document.getElementById("prenota") as HTMLInputElement;
console.log(prenotazione)
let info = document.getElementById("data") as unknown as string;
console.log(info)
const nome = document.getElementById("nome") as HTMLInputElement;
console.log(nome)
const ClasseBottoni = document.getElementsByClassName("bottoni");
console.log(ClasseBottoni)

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
    console.log(this.bottoni)
    console.log(this.bottoni1)
    var length = this.bottoni.length;
    prenotazione.addEventListener("click", prenotazione.function(){
      for(var i=0; i<length; i++){
        this.bottoni[i].addEventListener("click", this.bottoni[i].selezionaPosto, false);
      }
    }, false);
  };
selezionaPosto(){
      this.value = info;
      this.style.color = "red";
      info="";
  };
toArray() { //funzione che trasforma l'array di bottoni in un array di stringhe
    return this.bottoni.map((fila) =>
      fila.map(x => x.value)
    );
  };
}

function mostraTeatro() { //mostra l'array risultante
  console.log(plateaPrenotazione.toArray());
  console.log(palchiPrenotazione.toArray());
 }

//chiamata e inserimento nelle variabili della funzione OrdinePrenotazione per prenotare i posti in platea e sui palchi
var plateaPrenotazione = new AppComponent();
var palchiPrenotazione = new AppComponent();
