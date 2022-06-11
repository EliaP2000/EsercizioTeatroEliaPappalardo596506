import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Teatro';
  bottoni = [];
  bottoni1 = [];
style: any;
value: string;
  constructor(posti, element){
    this.bottoni = posti.map((fila, i) => { 
      var p = fila.map((nome, j) => {
        var btn = document.createElement('button'); //crea i bottoni
        element.appendChild(btn);
        btn.value = nome;
        btn.style.color = (nome !== "x") ? 'red' : 'green'; //cambio di colore se contenente un nome oppure una x (posto non prenotato)
        btn.innerHTML = 'P' + (j + 1) + (i + 1); 
        btn.addEventListener('click', this.selezionaPosto); //selezione il posto al click restituendo successivamente il valore del bottone
        return btn;
      });
      element.appendChild(document.createElement('br'));
      return p;
    });
    this.bottoni = Array(71).fill(0).map((x,i)=>i);
    this.bottoni1 = Array(25).fill(0).map((x,i)=>i);
  }
  selezionaPosto () { //input box per inserire un nominativo da inserire nel nostro teatro. Inserito il nominativo si fa click su un posto e il nominativo viene registrato nel bottone in corrispondenza al posto. Insieme, il colore del tasto diventa rosso per segnalare che il posto è occupato, e il contenuto dell'input box viene cancellato.
    if ( prenotaEl.value !== "" ) {
      this.value = prenotaEl.value;
      this.style.color = "red";
      prenotaEl.value="";
    }
    else
      nomeEl.innerHTML = this.value 
  };
  toArray() { //funzione che trasforma l'array di bottoni in un array di stringhe
    return this.prenotazione.map((fila) =>
      fila.map( x => x.value)
    );
  }
}
}
const prenotaEl = document.getElementById('prenota');
const nomeEl = document.getElementById('nome');
/*
function PrimoDiv(){
  if(chiaveTeatro == Keyteatro){
    div1.style.display = 'none';
    div2.style.display = 'show';
  }
  else{
    document.getElementById('rispostaChiave').innerHTML = 'OK';
  }
}

function SecondoDiv(){
  if(nomeUtente){
    div3.style.display = 'show';
  }
  else if(nomeUtente == null){
    alert("stringa nulla: inserire nome");
  }
}

function getValue() { //creazione dell'Observable per la get
  const obs = ajax({
    method: 'GET',
    url: URL + '/get?key=' + chiaveTeatro,
    crossDomain: true,
  });
  obs.subscribe({
    next: (res: AjaxResponse<any>) => {
      document.getElementById('rispostaChiave').innerHTML = res.response; //se premuto il pulsante get da in output il valore preso nel set
    },
    error: (err: AjaxError) => console.error(err.response),
  });
}

function setValue() { //creazione dell'Observable per la set

  console.log(document.getElementById('data'));
  const obs = ajax({
    method: 'POST',
    url:URL + '/set?key=' + chiaveTeatro,
    crossDomain: true,
    body: document.getElementById('key'),
  })
  obs.subscribe({
    next: (res: AjaxResponse<any>) => {
      document.getElementById('rispostaChiave').innerHTML = 'Ok!'; //response se il nuovo valore venisse settato
    },
    error: (err: AjaxError) => console.error(err.response),
  });
}*/

