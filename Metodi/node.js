const attivita = [ 
  { id: 1, titolo: "Analizzare i requisiti", stato: "Da fare", priorita: "Alta", responsabile: "Marta", oreStimate: 2 }, 
  { id: 2, titolo: "Disegnare l'interfaccia", stato: "In corso", priorita: "Media", responsabile: "Luca", oreStimate: 3 }, 
  { id: 3, titolo: "Creare il form", stato: "Da fare", priorita: "Alta", responsabile: "Sara", oreStimate: 4 }, 
  { id: 4, titolo: "Testare il salvataggio", stato: "Completato", priorita: "Media", responsabile: "Amir", oreStimate: 2 }, 
  { id: 5, titolo: "Scrivere il README", stato: "Da fare", priorita: "Bassa", responsabile: "Luca", oreStimate: 1 }, 
  { id: 6, titolo: "Correggere gli errori", stato: "In corso", priorita: "Alta", responsabile: "Marta", oreStimate: 3 } 
]; 

console.table(attivita);


console.log(`\nATTIVITA IN CORSO`)
const attivitaInCorso = ((attivita) =>{
    if(attivita.stato == "In corso"){
        console.log(`Titolo: ${attivita.titolo}`);
    }
})

attivita.forEach(attivitaInCorso);

console.log("\nREPORT FORMATTATO");
const reportStringhe = attivita.map((attivitaItem) => {
    return `${attivitaItem.titolo} - Responsabile: ${attivitaItem.responsabile}`;
});

reportStringhe.forEach((stringa) => {
    console.log(stringa);
});

console.log("\nPRIMA ATTIVITA CON PRIORITA ALTA E STATO DA FARE");

const primaAttivitaTrovata = attivita.find((el) => {
    return el.priorita === "Alta" && el.stato === "Da fare";
});

console.log("Titolo:", primaAttivitaTrovata ? primaAttivitaTrovata.titolo : "Nessuna attività trovata");

console.log(`\nORE COMPLESSIVE MANCANI`)
const oreNonCompletate = attivita
    .filter((attivitaItem) => attivitaItem.stato !== "Completato")
    .reduce((totale, attivitaItem) => totale + attivitaItem.oreStimate, 0);

console.log(`Le ore complessive sono: ${oreNonCompletate} ore`);

const attivitaAggiornate = attivita.map((attivitaItem) => {
    if (attivitaItem.id === 3) {
        return {
            ...attivitaItem,     
            stato: "In corso"    
        };
    }
    return attivitaItem;         
});

console.log("\nNUOVO ARRAY");
console.table(attivitaAggiornate);

console.log("\nARRAY ORIGINALE");
console.table(attivita);

const totaleAttivita = attivita.length;

const numeroInCorso = attivita.filter((a) => a.stato === "In corso").length;


console.log(`
----------------------------------------
           REPORT FINALE PROGETTO
----------------------------------------
-Numero totale delle attività: ${totaleAttivita}
-Attività in corso: ${numeroInCorso}
-Ore complessive ancora necessarie: ${oreNonCompletate} ore
`);
