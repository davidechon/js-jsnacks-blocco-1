// alert("Hello World! 01");

// Consegna
// JSnack 1
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//Flowchart
// A --> B[INIZIO]
// B --> C[Creo un array con i nomi degli invitati - 10 nomi]
// C --> D[chiedi il nome utente]
// D --> E[confronta il nome inserito con la lista invitati]
// E -->|if| F{se nomeUtente === listaInvitati}
// F -->|vero| G[nomeUtente può partecipare alla festa]
// F -->|falso| H[Accesso negato]
// G && H --> Z[FINE]

// const listaInvitati = ['Aurora', 'Davide', 'Ginevra', 'Lorenzo', 'Alice', 'Federico', 'Giorgia', 'GianMarco', 'Maddalena',  'Andrea',]

// let nomeUtente = prompt('Inserisci il tuo nome');
// let trovata = false;
// let index;

// for(let i = 0; i < listaInvitati.length; i++){
//   if(nomeUtente === listaInvitati[i]){
//     trovata = true;
//     index = i;
//     // console.log(listaInvitati);
//     console.log(nomeUtente, " può partecipare alla festa");
//   } else {
//     console.log(nomeUtente, "Accesso negato")
//   }
// }

//Correzione in classe
const listaInvitati = ['Aurora', 'Davide', 'Ginevra', 'Lorenzo', 'Alice', 'Federico', 'Giorgia', 'GianMarco', 'Maddalena',  'Andrea',]

let nomeUtente = prompt('Inserisci il tuo nome');
let checkUser = false;
/* let altriInvitati = []; */

for(let i = 0; i < listaInvitati.length; i++){
  if(nomeUtente === listaInvitati[i]){
    checkUser = true;
  } /* else {
    altriInvitati.push(listaInvitati[i]);
  } */

}

if(checkUser){
  console.log("Benvenuto alla festa!");
  // document.writeln("Benvenuto alla festa!");  /* ATTENZIONE, msg errore */
  // console.log("Ci saranno anche " + altriInvitati.join(", "));
  // document.writeln("Ci saranno anche " + altriInvitati.join(", "));  /* ATTENZIONE, msg errore */
} else {
  console.log(nomeUtente, "Accesso negato")
  console.log("Mi dispiace non sei tra gli invitati!");
}




