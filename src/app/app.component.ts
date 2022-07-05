import { Component } from '@angular/core';

let Inserimento:HTMLElement = document.getElementsByClassName("divInserimento")[0] as HTMLElement;
let Teatro:HTMLElement = document.getElementsByClassName("divTeatro")[0] as HTMLElement;
let info = document.getElementById("data") as unknown as string;
const nome = document.getElementById("nome") as HTMLInputElement;
let MostraTeatro:HTMLElement = document.getElementsByClassName("divTeatro")[0] as HTMLElement;
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
public selezionaPosto(){
    for(var i=0; i<this.bottoni.length; i++){
      if(this.bottoni[i] == this.bottoni[i].addEventListener("click", true)){
        this.bottoni[i].value = info;
        this.bottoni[i].style.color = "red";
        info="";
      }
    }
  };}
/*public showTeatro(){
  SpegniInserimento.style.visibility= "hidden";
  };
}

var plateaPrenotazione = new AppComponent();
var palchiPrenotazione = new AppComponent();

plateaPrenotazione.showTeatro();
palchiPrenotazione.showTeatro();

plateaPrenotazione.selezionaPosto();
palchiPrenotazione.selezionaPosto();
*/

document.getElementById('A').addEventListener('mouseover', function(){
  changeColor(aColl, 'red');
});

document.getElementById('B').addEventListener('mouseover', function(){
  changeColor(bColl, 'blue');
});
function changeColor(coll, color){

for(var i=0, len=coll.length; i<len; i++)
{
  coll[i].style["background-color"] = color;
}
}