import { Component } from '@angular/core';
function selezionaPosto();
let prenotazione = document.getElementById("prenota") as HTMLButtonElement;
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
  };
selezionaPosto(){
    for(var i=0; i<this.bottoni.length; i++){
      if(this.bottoni[i] == this.bottoni[i].addEventListener("click", true)){
        this.bottoni[i].value = info;
        this.bottoni[i].style.color = "red";
        info="";
      }
    }
  };
}

var plateaPrenotazione = new AppComponent();
var palchiPrenotazione = new AppComponent();
