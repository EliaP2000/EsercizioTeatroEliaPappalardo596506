import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, VERSION } from '@angular/core';
import { ajax, AjaxResponse, AjaxRequest, AjaxError } from 'rxjs/ajax';

//VARIABILI

const chiaveTeatro = document.getElementById('key') as unknown as string;
const nomeUtente = document.getElementById('nome') as HTMLInputElement;
const Keyteatro = "6701ca6a";
const div1 = document.getElementById('chiaveTeatro') as HTMLElement;
const div2 = document.getElementById('login') as HTMLElement;
const div3 = document.getElementById('teatro') as HTMLElement;
const resetTeatro = document.getElementById('reset');

const nfilePlatea1 = 1;
const npostiPlatea1 = 10;
const nfilePlatea2 = 1;
const npostiPlatea2 = 10;
const nfilePalchi = 4;
const npostiPalchi = 6;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent   
{   
    teatro1: Teatro1[] = [
      {righe1: Array(nfilePlatea1).fill("").map(() => Array(npostiPlatea1).fill("P1")),
      righe2: Array(nfilePlatea2).fill("").map(() => Array(npostiPlatea2).fill("P2")),
      righe3: Array(nfilePlatea2).fill("").map(() => Array(npostiPlatea2).fill("P3")),
      righe4: Array(nfilePlatea2).fill("").map(() => Array(npostiPlatea2).fill("P4")),
      righe5: Array(nfilePlatea2).fill("").map(() => Array(npostiPlatea2).fill("P5")),
      righe6: Array(nfilePlatea2).fill("").map(() => Array(npostiPlatea2).fill("P6")),
      righe7: Array(nfilePlatea2).fill("").map(() => Array(npostiPlatea2).fill("P7")),

    }
    ]
    teatro2: Teatro2[] = [
      {palchi: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("P3"))}
    ] 
}   
class Teatro1 {  
    righe1 : any[][]; 
    righe2 : any[][];
    righe3 : any[][];
    righe4 : any[][];
    righe5 : any[][];
    righe6 : any[][];
    righe7 : any[][];
} 
class Teatro2 {  
  palchi: any[][];
}  

function selezionaPosto() { 
  if (nomeUtente.value !== "" ) {
    this.value = nomeUtente.value;
    this.style.color = "red";
    nomeUtente.value="";
  }
}

function toArray() { 
  return this.prenotazione.map((fila) =>
    fila.map( x => x.value)
  );
}

//CLASSE 
/*
class ordinePrenotazione {
  prenotazione = [];
  value: any;
  style: CSSStyleDeclaration;
  constructor(posti, elementName) { 
    console.log(elementName)
    var element = document.getElementById(elementName);
    console.log(elementName)
    console.log(element)
    this.prenotazione = posti.map((fila, i) => { 
      var p = fila.map((nome, j) => {
        var btn = document.createElement('button'); 
        element.appendChild(btn);
        console.log(elementName)
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
    if (nomeUtente.value !== "" ) {
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
*/
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


