const eventi = [
  { id: 1, titolo: "Torneo di robotica", categoria: "Tecnologia", costo: 12, posti: 24, iscritti: 18, attivo: true },
  { id: 2, titolo: "Laboratorio di fotografia", categoria: "Arte", costo: 8, posti: 15, iscritti: 15, attivo: true },
  { id: 3, titolo: "Visita al museo della scienza", categoria: "Scienze", costo: 20, posti: 30, iscritti: 21, attivo: true },
  { id: 4, titolo: "Corso di primo soccorso", categoria: "Formazione", costo: 0, posti: 20, iscritti: 12, attivo: false },
  { id: 5, titolo: "Hackathon scolastico", categoria: "Tecnologia", costo: 5, posti: 40, iscritti: 35, attivo: true },
  { id: 6, titolo: "Teatro serale", categoria: "Cultura", costo: 15, posti: 25, iscritti: 9, attivo: true }
];

const postiLiberi = (evento) => {
    const liberi = evento.posti - evento.iscritti;
    console.log(`Titolo: ${evento.titolo} | Posti liberi: ${liberi}`);
};

eventi.forEach(postiLiberi);

console.log("\nEVENTI CON DISPONIBILITA");
const eventiConDisponibilita = eventi.map((evento) => {
    return {
        ...evento, 
        postiLiberi: evento.posti - evento.iscritti 
    };
});

console.log("--- NUOVO ARRAY CON POSTI LIBERI ---");
console.table(eventiConDisponibilita);

console.log("--- CONTROLLO ARRAY ORIGINALE (invariato) ---");
console.table(eventi);

console.log("\nEVENTI PRENOTABILI");
const eventiPrenotabili = (evento) => {
    if (evento.attivo === true && (evento.posti - evento.iscritti) > 0) {
        console.log(`Titolo: ${evento.titolo}`);
    }
};
eventi.forEach(eventiPrenotabili);

console.log("\nEVENTI TECNOLOGICI");
const eventiTecnologia = (evento) => {
    if (evento.categoria === "Tecnologia") {
        console.log(`Titolo: ${evento.titolo}`);
    }
};
eventi.forEach(eventiTecnologia);

const eventoTrovato = eventi.find((el) => {
  return el.id === 3;
});

console.log("\nEVENTO CON ID 3");
console.log(eventoTrovato);

const eventoCompleto = eventi.find((evento) => (evento.posti - evento.iscritti) === 0);

console.log("\nPRIMO EVENTO COMPLETO:");
console.log(eventoCompleto ? eventoCompleto.titolo : "Nessun evento completo trovato");


const totaleIscrittiAttivi = eventi
    .filter((evento) => evento.attivo)
    .reduce((totale, evento) => totale + evento.iscritti, 0);

console.log(`\nIL NUMERO TOTALE DI ISCRITTI DEGLI EVENTI ATTIVI: ${totaleIscrittiAttivi}`);


const incassoPrevistoAttivi = eventi
    .filter((evento) => evento.attivo)
    .reduce((totale, evento) => totale + (evento.costo * evento.iscritti), 0);

console.log(`\nL'INCASSO PREVISTO PR GLI EVENTI ATTIVI: ${incassoPrevistoAttivi} EURO`);