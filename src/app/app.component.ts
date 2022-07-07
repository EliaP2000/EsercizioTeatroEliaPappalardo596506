import { Component } from '@angular/core';

/*let info = document.getElementById("data") as string|HTMLInputElement;
console.log(info)*/
let Teatro:HTMLElement = document.getElementsByClassName("divTeatro")[0] as HTMLElement;
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
    this.bottoni = Array(70).fill(0).map((x,i)=>i+1);
    this.bottoni1 = Array(24).fill(0).map((x,i)=>i+1);
  };
public selezionaPostoPlatea(info: string, platea: HTMLElement){
  for(var j=0; j<this.bottoni.length; j++){
      if(platea==this.bottoni[i])
      this.bottoni[j] = info;
      platea.style.backgroundColor = "red";
      info="";
    }
  };
public selezionaPostoPalchi(palchi: string|number){
      this.bottoni1[palchi] = info;
      this.bottoni1[palchi].style.color = "red";
      info="";
  };
public showTeatro(i: number){
  var w = Array.from(document.getElementsByClassName("divInserimento")[0] as unknown as HTMLCollectionOf<HTMLElement>);
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
var platea: HTMLElement;
var palchi: string|number;
var info: string;
var i: number;

plateaPrenotazione.selezionaPostoPlatea(info, platea);
palchiPrenotazione.selezionaPostoPalchi(palchi);

plateaPrenotazione.showTeatro(i);
palchiPrenotazione.showTeatro(i);


