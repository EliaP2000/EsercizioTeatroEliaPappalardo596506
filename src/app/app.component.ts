import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/*let info = document.getElementById("data") as string|HTMLInputElement;
console.log(info)*/

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public value: any;
  public style: CSSStyleDeclaration;
  bottoni = [];
  bottoni1 = [];
  constructor() {
    this.bottoni = Array(70).fill(0).map((x, i) => i + 1);
    this.bottoni1 = Array(24).fill(0).map((x, i) => i + 1);
  }
  public selezionaPostoPlatea(info: string, Numplatea: any) {
    for (var j = 0; j < this.bottoni.length; j++) {
      if (Numplatea == j) {
        this.bottoni[j] = info;
        //this.bottoni[j].style.backgroundColor = "red";
        info = '';
      }
    }
  }
  public selezionaPostoPalchi(info: string, Numpalchi: any) {
    for (var j = 0; j < this.bottoni1.length; j++) {
      if (Numpalchi == j) {
        this.bottoni1[j] = info;
        //this.bottoni1[j].style.backgroundColor = "red";
        info = '';
      }
    }
  }
}
var BloccoInserimento = Array.from(
  document.getElementsByClassName(
    'divInserimento'
  ) as unknown as HTMLCollectionOf<HTMLElement>
);
var plateaPrenotazione = new AppComponent();
var palchiPrenotazione = new AppComponent();
var Numplatea: any;
var Numpalchi: any;
var info: string;
var nomeInserito: any;
var key: string;

function EntryDatabase(key: string){
  var w = Array.from(
    document.getElementsByClassName(
      'divEntry'
    ) as unknown as HTMLCollectionOf<HTMLElement>
  );
  for(var j=0; j<w.length; j++){
    if(key=='6701ca6a'){
      document.getElementById('output').innerHTML = 'chiave corretta';
      w[j].style.visibility = "hidden";
    }
    else{
      document.getElementById('output').innerHTML = 'chiave errata';
    }
    return BloccoInserimento[j].style.visibility = "visibile";
  }
}

function showTeatro(nomeInserito: any) {
  var BloccoTeatro = Array.from(
    document.getElementsByClassName(
      'divTeatro'
    ) as unknown as HTMLCollectionOf<HTMLElement>
  );
  if (nomeInserito != null) {
    for (var j = 0; j < BloccoInserimento.length; j++) {
      BloccoInserimento[j].style.visibility = 'hidden';
      BloccoTeatro[j].style.visibility = 'visibile';
      return BloccoInserimento || BloccoTeatro;
    }
  } else {
    for (var j = 0; j < BloccoInserimento.length; j++) {
      BloccoInserimento[j].style.visibility = 'visible';
      BloccoTeatro[j].style.visibility = 'hidden';
      return BloccoInserimento || BloccoTeatro;
    }
  }
}

var MostraTeatro = showTeatro(nomeInserito);
var Accesso = EntryDatabase(key);