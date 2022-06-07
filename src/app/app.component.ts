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

const chiaveTeatro = document.getElementById('key') as unknown as string;
const nomeUtente = document.getElementById('nome');
const Keyteatro = "6701ca6a";
const div1 = document.getElementById('chiaveTeatro') as HTMLElement;
const div2 = document.getElementById('login') as HTMLElement;
const div3 = document.getElementById('teatro') as HTMLElement;
const resetTeatro = document.getElementById('reset');
const Teatro = {
  platea: Array(nfilaPlatea).fill("").map(() => Array(npostiPlatea).fill("x")),
  palchi: Array(nfilaPalchi).fill("").map(() => Array(npostiPalchi).fill("x")),
};

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
