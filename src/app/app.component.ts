import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/*let info = document.getElementById("data") as string|HTMLInputElement;
console.log(info)*/
let Teatro:HTMLElement = document.getElementsByClassName("divTeatro")[0] as HTMLElement;

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
public selezionaPostoPlatea(info: string, Numplatea: any){
  for(var j=0; j<this.bottoni.length; j++){
      if(Numplatea==j){
        this.bottoni[j] = info;
      //this.bottoni[j].style.backgroundColor = "red";
        info="";
      }
    }
  };
public selezionaPostoPalchi(info: string, Numpalchi: any){
  for(var j=0; j<this.bottoni1.length; j++){
    if(Numpalchi==j){
      this.bottoni1[j] = info;
      //this.bottoni1[j].style.backgroundColor = "red";
      info="";
      }
    }
  };
}

function showTeatro(nomeInserito: any){
  var w = Array.from(document.getElementsByClassName("divInserimento") as unknown as HTMLCollectionOf<HTMLElement>);
    if(nomeInserito != null){
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
}

var plateaPrenotazione = new AppComponent();
var palchiPrenotazione = new AppComponent();
var Numplatea: any;
var Numpalchi: any;
var info: string;
var nomeInserito: any;

plateaPrenotazione.selezionaPostoPlatea(info, Numplatea);
palchiPrenotazione.selezionaPostoPalchi(info, Numpalchi);

document.
