const age = prompt("Inserisci la tua età");
console.log(`Anni: ${age}`);
document.getElementById("biglietto"); innerHtml

const km = prompt("Inserisci il numero di km da percorrere")
console.log(`km: ${km}`)

const prezzo = 0.21
console.log(`prezzo: ${prezzo}`)



const prezzoBiglietto = prezzo * km
console.log(`prezzoBiglietto: ${prezzoBiglietto}`);



if (age < 18)  {
    console.log(`Applico lo sconto del 20%`);
   

    const finalPrice = prezzoBiglietto * 0.8;
    console.log(`Prezzo sconato del 20%:`, finalPrice);
}


else if (age > 65)  {
    console.log(`Applico lo sconto del 40%`);
   

    const finalPrice = prezzoBiglietto * 0.6;
    console.log(`Prezzo sconato del 40%:`, finalPrice);
}
