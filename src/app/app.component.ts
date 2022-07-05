import { Component } from '@angular/core';
let prenotazione = document.getElementById("prenota") as HTMLButtonElement;
let info = document.getElementById("data") as unknown as string;
const nome = document.getElementById("nome") as HTMLInputElement;
const ClasseBottoni = document.getElementsByClassName("bottoni");
const divTeatro = document.getElementsByClassName("divTeatro") as unknown as HTMLElement;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public value: any;
  public style: CSSStyleDeclaration;
  bottoni = [];
  bottoni1 = [];
  constructor(){
    this.bottoni = Array(71).fill(0).map((x,i)=>i);
    this.bottoni1 = Array(25).fill(0).map((x,i)=>i);
  };
public selezionaPosto(){
    for(var i=0; i<this.bottoni.length; i++){
      if(this.bottoni[i] == this.bottoni[i].addEventListener("click", true)){
        this.bottoni[i].value = info;
        this.bottoni[i].style.color = "red";
        info="";
      }
    }
  };
public showTeatro(){
    divTeatro.style.visibility= "visibile";
  };
}

var plateaPrenotazione = new AppComponent();
var palchiPrenotazione = new AppComponent();

plateaPrenotazione.showTeatro();
palchiPrenotazione.showTeatro();

plateaPrenotazione.selezionaPosto();
palchiPrenotazione.selezionaPosto();