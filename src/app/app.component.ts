import { Component } from '@angular/core';

let Teatro:HTMLElement = document.getElementsByClassName("divTeatro")[0] as HTMLElement;
let info = (document.getElementById("data") as unknown as string);
const nome = document.getElementById("nome") as HTMLInputElement;
const ClasseBottoni = document.getElementsByClassName("bottoni");

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
public selezionaPostoPlatea(){
    for(var i=0; i<this.bottoni.length; i++){
      if(this.bottoni[i]){
        this.bottoni[i].value = info;
        this.bottoni[i].style.color = "red";
        info="";
      }
    }
  };
public selezionaPostoPalchi(){
  for(var i=0; i<this.bottoni1.length; i++){
    if(this.bottoni1[i]){
      this.bottoni1[i].value = info;
      this.bottoni1[i].style.color = "red";
      info="";
    }
  }
};
public showTeatro(i: number){
  var w = Array.from(document.getElementsByClassName("divInserimento")[0] as unknown as HTMLCollectionOf<HTMLElement>)
    if(i==1){
      for(var j=0; j<w.length; j++){
        w[j].style.visibility='hidden';
        Teatro.style.visibility="visibile";
      }
    }
    else{
      for(var j=0; j<w.length; j++){
        w[j].style.visibility='visible';
        Teatro.style.visibility="hidden";
      }
    }
  };
}

var plateaPrenotazione = new AppComponent();
var palchiPrenotazione = new AppComponent();
var contatore: number;

plateaPrenotazione.selezionaPostoPlatea();
palchiPrenotazione.selezionaPostoPalchi();