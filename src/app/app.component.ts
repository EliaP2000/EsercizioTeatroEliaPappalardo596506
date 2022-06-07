import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, VERSION } from '@angular/core';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}

//VARIABILI

const chiaveTeatro = document.getElementById('key') as unknown as string;
const nomeUtente = document.getElementById('nome') as unknown as string;
const Keyteatro = "6701ca6a";
const div1 = document.getElementById('chiaveTeatro') as HTMLElement;
const div2 = document.getElementById('login') as HTMLElement;
const div3 = document.getElementById('teatro') as HTMLElement;
const resetTeatro = document.getElementById('reset');

const nfilePlatea = 7;
const npostiPlatea = 10;
const nfilePalchi = 4;
const npostiPalchi = 6;

const Teatro = {
  platea: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("x")),
  palchi: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("x")),
};

//CLASSE 

class ordinePrenotazione { 
  prenotazione = [];
  value: any;
  style: CSSStyleDeclaration;
  constructor(posti, elementName) { 
    var element = document.getElementById(elementName);
    this.prenotazione = posti.map((fila, i) => { 
      var p = fila.map((nome, j) => {
        var btn = document.createElement('button'); 
        element.appendChild(btn);
        btn.value = nome;
        btn.style.color = (nome !== "x") ? 'red' : 'green'; 
        btn.innerHTML = 'P' + (j + 1) + (i + 1); 
        btn.addEventListener('click', this.selezionaPosto); 
        return btn;
      });
      element.appendChild(document.createElement('br'));
      return p;
    });
  }
  selezionaPosto () { 
    if (nomeUtente !== "" ) {
      this.value = nomeUtente.value;
      this.style.color = "red";
      nomeUtente.value="";
    }
  };
  toArray() { 
    return this.prenotazione.map((fila) =>
      fila.map( x => x.value)
    );
  }
}

//FUNZIONI

function PrimoDiv(){
  if(chiaveTeatro == Keyteatro){
    div1.style.display = 'none';
    div2.style.display = 'show';
  }
  else{
    alert("chiave errata");
  }
}

function SecondoDiv(){
  if(nomeUtente){
    div3.style.display = 'show';
  }
  else if(nomeUtente == null){
    alert("stringa nulla");
    alert("inserire nome");
  }
}

var plateaPrenotazione = new ordinePrenotazione(Teatro.platea, 'platea');
var palchiPrenotazione = new ordinePrenotazione(Teatro.palchi, 'palchi');
