// alert("Hello World! 03");

//Consegna
// JSnack 3
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

//Flowchart
// A --> B[INIZIO]
// B --> C[Chiedi di inserire un numero di 4 cifre]
// C --> D{check se sono 4 cifre}
// D -->|si| E[somma le tutte le cifre]
// D -->|no| F[Inserimento non corretto. Riprova]
// E && F [stampa i risultati]
// E --> Z[FINE]

/////////////////
// A --> B[INIZIO]
// B --> C[Chiedi di inserire un numero di 4 cifre]
let numUser = prompt('Inserisci un numero di 4 cifre');
let contaNum;
// C --> D{check se sono 4 cifre}
if(numUser.length == 4){
  console.log(numUser + " - " +  numUser.length);
  // D -->|si| E[somma le tutte le cifre]
  contaNum = numUser.spit("");

}else{
  // D -->|no| F[Inserimento non corretto. Riprova]
  alert("Inserimento non corretto. Ricarica la pagina");
}

// E && F [stampa i risultati]

// E --> Z[FINE]



//////////////////////////////////////////////
// let arrayVuoto = [];
// for(let numDispari = 0; numDispari < 6; numDispari++){
//  let numInserito = parseInt(prompt('Inserisci un numero da 1 a 10'));
//   if(numInserito % 2 !== 0){
//     arrayVuoto.push=(numInserito);
//   }
//   console.log(numDispari, numInserito, arrayVuoto);
// }