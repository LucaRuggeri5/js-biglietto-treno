// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// TIP:
// per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

// 100km, 10 anni => prezzo corretto:  €16.80
// 100km, 70 anni => prezzo corretto: €12.60

// chiedo numero di kilometri
const km = parseInt(prompt("inserisci i kilometri che vuoi percorrere"));
console.log("numero kilometri", km);

// chiedo età
const anni = parseInt(prompt("inserisci quanti anni hai"));
console.log("anni utente", anni);

// prezzo biglietto
let prezzoBiglietto = (0.21 * km)

// condizione per lo sconto
if (anni < 18) {
    prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 20 / 100));
} else if (anni >= 65) {
    prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 40 / 100));
} else {
    prezzoBiglietto = (0.21 * km);
}

// Prezzo
console.log(prezzoBiglietto.toFixed(2));