import { Component } from '@angular/core';
const prenotazione = document.getElementById('prenota') as HTMLInputElement;
console.log(prenotazione)
const nome = document.getElementById('nome') as HTMLInputElement;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  private value: any;
  private style: CSSStyleDeclaration;
  bottoni = [];
  bottoni1 = [];
  constructor(){
    this.bottoni = Array(71).fill(0).map((x,i)=>i);
    this.bottoni1 = Array(25).fill(0).map((x,i)=>i);
    for(var i=0; i<this.bottoni.length; i++){
      this.bottoni[i].value.addEventListener('click', this.selezionaPosto);
    }
  };
selezionaPosto(){
    if (prenotazione.value!=="") {
      this.value = prenotazione.value;
      this.style.color = "red";
      prenotazione.value="";
    }
    else
      nome.innerHTML = this.value;
  };
toArray() { //funzione che trasforma l'array di bottoni in un array di stringhe
    return this.bottoni.map((fila) =>
      fila.map( x => x.value)
    );
  };
}

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
