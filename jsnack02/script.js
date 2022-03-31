// alert("Hello World! 02");

// Consegna
// JSnack 2
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

//Flowchart
// A --> B[INIZIO]
// B --> C[Creo un array vuoto]
// C --> D[chiedi di inserire un numero * 6 volte]
// D --> E[confronta se il numero inserito è divisibile CON resto]
// E -->|if| F{se numInserito === numDispari}
// F -->|vero| G[Aggiungi numInserito all'array]
// F -->|falso| H[Riprova]
// G && H --> Z[FINE]

let arrayVuoto = [];
for(let numDispari = 0; numDispari < 6; numDispari++){
 let numInserito = parseInt(prompt('Inserisci un numero da 1 a 10'));
  if(numInserito % 2 !== 0){
    arrayVuoto.push=(numInserito);
  }
  console.log(numDispari, numInserito, arrayVuoto);
}
