import { Component } from '@angular/core';
const prenotazione = document.getElementById('prenota') as HTMLInputElement;
console.log(prenotazione)
const nome = document.getElementById('nome') as HTMLInputElement;
console.log(nome)
const ClasseBottoni = document.getElementsByClassName('bottoni');
console.log(ClasseBottoni)

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
    console.log(this.bottoni)
    console.log(this.bottoni1)
    for(var i=0; i<this.bottoni1.length; i++){
      var valoreBottone1 = this.bottoni1[i];
      valoreBottone1.addEventListener('click', this.selezionaPosto(), false);
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
/*for (const bottoni of ClasseBottoni) {
  bottoni.addEventListener('click', function onClick() {
  });
}*/
