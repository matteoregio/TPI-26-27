const prodotti = [
 {
   id: 1,
   nome: "Notebook",
   categoria: "Informatica",
   prezzo: 850,
   quantita: 2,
   disponibile: true
 },
 {
   id: 2,
   nome: "Mouse",
   categoria: "Accessori",
   prezzo: 25,
   quantita: 5,
   disponibile: true
 },
 {
   id: 3,
   nome: "Monitor",
   categoria: "Informatica",
   prezzo: 230,
   quantita: 3,
   disponibile: false
 },
 {
   id: 4,
   nome: "Tastiera",
   categoria: "Accessori",
   prezzo: 45,
   quantita: 4,
   disponibile: true
 }
];

// console.log(prodotti)
console.table(prodotti);

//arrow function 

const calcolaValore = (prodotto) => {
    const valore = prodotto.prezzo*prodotto.quantita;
    return valore;
};

console.log("\nARROW FUNCTION")
console.log("Valore dei notebook:", calcolaValore(prodotti[0]), "euro");

const mostraProdotto = (prodotto, indice) => {
    console.log(`${indice + 1}. ${prodotto.nome} - ${prodotto.prezzo} euro`)
};

//FOREACH
prodotti.forEach(mostraProdotto);

const nomiProdotti = prodotti.map((prodotto) => {
    return prodotto.nome;
})
console.log("Nome dei prodotti: ");
console.log(nomiProdotti);

const valoriProdotti = prodotti.map((prodotto) => {
    return prodotto.prezzo*prodotto.quantita;
})
console.log("Valori dei prodotti: ");
console.log(valoriProdotti);

console.log("\nFILTER");

const prodottiCostosi = prodotti.filter((prodotto) => {
    return prodotto.prezzo > 100;
})
console.log("Prodotto con maggior prezzo: ");
console.log(prodottiCostosi);

const prodottiDisponibili = prodotti.filter((prodotto) => {
    return prodotto.disponibile;
})
console.log("Prodotti disponibili: ");
console.log(prodottiDisponibili);

const prodottoTrovato = prodotti.find((prodotto) =>{
  return prodotto.id==3;
})

console.log("Prodotto con id 3");
console.log(prodottoTrovato);

//elabora tutti gli elementi dell'array e restituisce un unico risultato
//array.reduce(accumulatore, elementoCorrente)

const valoreComplessivo = prodotti.reduce((totale, prodotto) =>{
  const valoreProdotto = prodotto.prezzo*prodotto.quantita;
  return totale+valoreProdotto
},
0
);
console.log(`Valore complessivo dei prodotti : ${valoreComplessivo} euro`);

const copiaProdotti = [...prodotti];
console.table(copiaProdotti);

const nuovoProdotto = {
  id:5,
  nome:"Webcam",
  categoria:"Accessori",
  prezzo:60,
  quantita:3,
  disponibile:true
}

const prodottiAggiornati = [...prodotti, nuovoProdotto];
console.table(prodottiAggiornati);
console.log("Elementi array originale:", prodotti.length);
console.log("Elementi del nuovo array:", prodottiAggiornati.length);

const altriProdotti = [{
  id:6,
  nome:"Stampante",
  categoria:"Informatica",
  prezzo:150,
  quantita:1,
  disponibile:true
}]

const catalogoCompleto = [
  ...prodotti,
  ...altriProdotti
];
console.log("Unione di due array");
console.table(catalogoCompleto);

const prodottiOrdinati = [...prodotti].sort((a, b)=> 
  a.prezzo - b.prezzo
);

console.log("\nPRODOTTI ORDINATI PER PREZZO (Crescente):");
console.log(prodottiOrdinati);

