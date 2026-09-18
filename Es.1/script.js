const form = document.getElementById("form");
const messaggio = document.getElementById("messaggio");
const tabella = document.getElementById("tabellaFeedback");

form.addEventListener("submit", gestisciSubmit);

const dati = [];

function gestisciSubmit(event){
    event.preventDefaul();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const ora = document.getElementById("ora").value;
    const selezione = document.getElementById("selezione").value;
    const messaggio = document.getElementById("messaggio").value.trim();
    const newsletter = document.getElementById("check").checked;

    if(!nome || !email || !data || !ora || !selezione || !messaggio){
        alert("ATTENTO MALINTEZIONATO, NON HAI COMPILATO TUTTI I CAMPI SVEGLIATI E RILEGGI (babbo)")
        return;
    }

    const iscrizione = newsletter ? "Si" : "No";
    
    const riga = document.createElement("tr");//Crea le righe nella tabella

    const dato = {
        nome,
        email,
        data,
        ora,
        selezione,
        messaggio,
        iscrizione
    };

}