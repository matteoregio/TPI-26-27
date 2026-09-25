const form = document.getElementById("form");
const tabella = document.getElementById("tabellaFeedback");

form.addEventListener("submit", gestisciSubmit);

function creaRiga(valori){

    const campi = ["nome", "email", "data","ora","selezione","messaggio","iscrizione"]
    const riga = document.createElement("tr");

    for (let i = 0; i < campi.length; i++) {
        const cella = document.createElement("td");
        cella.textContent = valori[campi[i]]; 
        riga.appendChild(cella);
    }

    const cellaAzioni = document.createElement("td");
    const bottone = document.createElement("button");

    bottone.textContent = "Elimina";
    bottone.addEventListener("click", function () {
        const indice = campi.indexOf(valori);
        if(indice !==1){
            campi.slice(indice, 1);
        }
        riga.remove();

    });

    cellaAzioni.appendChild(bottone);
    riga.appendChild(cellaAzioni);
    tabella.appendChild(riga);
}


function gestisciSubmit(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const ora = document.getElementById("ora").value;
    const selezione = document.getElementById("selezione").value;
    const messaggio = document.getElementById("messaggio").value.trim();
    const newsletter = document.getElementById("check").checked;

    if (!nome || !email || !data || !ora || !selezione || !messaggio) {
        alert("Attenzione: devi compilare tutti i campi del modulo.");
        return;
    }

    const iscrizione = newsletter ? "Sì" : "No";

    const valori = {
        nome, 
        email,
        data,
        ora,
        selezione,
        messaggio, 
        iscrizione
    };

    dati.push(valori);
    creaRiga(valori);
    form.reset();
   
}