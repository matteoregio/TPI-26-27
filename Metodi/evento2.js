// Array di partenza
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


const eventiOrdinati = [...eventi].sort((a, b) => a.costo - b.costo);

console.log("--- ARRAY ORIGINALE (Invariato) ---");
console.table(eventi);

const salvaEventi = (lista) => {
    localStorage.setItem("eventiScolastici", JSON.stringify(lista));
};

const caricaEventi = () => {
    const datiSalvati = localStorage.getItem("eventiScolastici");
    if (datiSalvati !== null) {
        return JSON.parse(datiSalvati);
    } else {
        return [...eventi];
    }
};

// 6. Salvataggio, ricaricamento e stampa in tabella
salvaEventi(eventiOrdinati);
const eventiCaricati = caricaEventi();

console.log("--- EVENTI ORDINATI CARICATI DA LOCALSTORAGE ---");
console.table(eventiCaricati);