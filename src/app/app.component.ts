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

const nfilePlatea = 1;
const npostiPlatea = 10;
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
      { platea1: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("P1")),
        platea2: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("P2")),
        platea3: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("P3")),
        platea4: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("P4")),
        platea5: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("P5")),
        platea6: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("P6")),
        platea7: Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("P7")),
      }
    ]
    teatro2: Teatro2[] = [
      {palchi1: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("P3")),
      palchi2: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("P3")),
      palchi3: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("P3")),
      palchi4: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("P3")),
      palchi5: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("P3")),
      palchi6: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("P3")),
      palchi7: Array(nfilePalchi).fill("").map(() => Array(npostiPalchi).fill("P3")),
    }
    ] 
}   
class Teatro1 {  
  platea1 : any[][]; 
  platea2 : any[][];
  platea3 : any[][];
  platea4 : any[][];
  platea5 : any[][];
  platea6 : any[][];
  platea7 : any[][];
} 
class Teatro2 {  
  palchi1: any[][];
  palchi2: any[][];
  palchi3: any[][];
  palchi4: any[][];
  palchi5: any[][];
  palchi6: any[][];
  palchi7: any[][];
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


