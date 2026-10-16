const attivita = [ 
  { id: 1, titolo: "Analizzare i requisiti", stato: "Da fare", priorita: "Alta", responsabile: "Marta", oreStimate: 2 }, 
  { id: 2, titolo: "Disegnare l'interfaccia", stato: "In corso", priorita: "Media", responsabile: "Luca", oreStimate: 3 }, 
  { id: 3, titolo: "Creare il form", stato: "Da fare", priorita: "Alta", responsabile: "Sara", oreStimate: 4 }, 
  { id: 4, titolo: "Testare il salvataggio", stato: "Completato", priorita: "Media", responsabile: "Amir", oreStimate: 2 }, 
  { id: 5, titolo: "Scrivere il README", stato: "Da fare", priorita: "Bassa", responsabile: "Luca", oreStimate: 1 }, 
  { id: 6, titolo: "Correggere gli errori", stato: "In corso", priorita: "Alta", responsabile: "Marta", oreStimate: 3 } 
]; 

console.table(attivita);

const attivitaInCorso = ((attivita) =>{
    if(attivita.stato == "In corso"){
        console.log(`Titolo: ${attivita.titolo}`);
    }
})

attivita.forEach(attivitaInCorso);
