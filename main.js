console.log("Ciao Mamma")
// Traccia 1
// Scrivere un programma che dati due numeri (a, b)
// e un'operazione (operation), esegua il calcolo corrispondente
// e stampi il risultato in console.

// Dati richiesti
let a = 25;
let b = 50;
let operation = "moltiplicazione";

let risultato;

// Scelta dell'operazione
if (operation === "addizione") {
    risultato = a + b;
} else if (operation === "sottrazione") {
    risultato = a - b;
} else if (operation === "moltiplicazione") {
    risultato = a * b;
} else if (operation === "divisione") {
    if (b !== 0) {
        risultato = a / b;
    } else {
        risultato = "Errore: divisione per zero non consentita.";
    }
} else {
    risultato = "Operazione non riconosciuta.";
}

// Stampa del risultato
console.log("Risultato:", risultato);



