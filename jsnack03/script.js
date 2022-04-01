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
  contaNum = numUser.split("");
  console.log(contaNum);
  let somma = 0;
  let index = 0;
  while (index < contaNum.length){
    console.log('index: ', index)
    console.log('conta numero: ', contaNum[index])

    somma += parseInt(contaNum[index]); 
    // E && F [stampa i risultati]
    console.log('somma: ', somma)
    index++
  }
  
}else{
  // D -->|no| F[Inserimento non corretto. Riprova]
  alert("Inserimento non corretto. Ricarica la pagina");
}
// E --> Z[FINE]

