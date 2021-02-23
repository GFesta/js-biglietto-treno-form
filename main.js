
//salviamo in una variabile il nostro BUTTON 'GENERA'
var buttonGenera = document.getElementById('genera');

//rimaniamo in ascolto di un evento click su quel button 'genera'
buttonGenera.addEventListener( 'click',
function() {

    var inputNome = document.getElementById("nome-utente").value;
    //var nomeUtente = inputNome.value;

    var inputEta = document.getElementById("fascia-eta").value;
    //var eta = inputEta.value;

    var inputKm = document.getElementById("km");
    var percorrenza = parseInt(inputKm.value);

    var prezzoAlKilometro = 0.21;
    var prezzoBiglietto = prezzoAlKilometro * percorrenza;
    var offerta = "Tariffa Standard";


    if (inputEta == "minorenne") {
        prezzoBiglietto -= (prezzoBiglietto * 20 / 100); //prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 20 / 100) or'prezzoBiglietto -= ()'
        offerta = "Sconto Minorenne";
    } else if (inputEta == "over65") {
        prezzoBiglietto -= (prezzoBiglietto * 40 / 100);
        offerta = "Sconto Maggiorenne";
    
    } 
    
    //GENERIAMO UN NUMERO RANDOM PER CARROZZA E CP
    var carrozza = Math.floor(Math.random() * 9) +1; //num compreso tra 1 e 9
    var cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000; //num compreso tra 90000 a 100000 escluso
    
    //stampiamo
    document.getElementById('nome-passeggero').innerHTML = inputNome;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto.toFixed(2) + " Euro" //"toFixed" lasciamo solo 2 decimali
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = cp;

    var bigliettoStampato = document.getElementById('biglietto');
    bigliettoStampato.classList.remove('hidden');
    bigliettoStampato.classList.add('show');
});

//salviamo in una variabile il nostro BUTTON 'ANNULLA'
var buttonAnnulla = document.getElementById('annulla');

//rimaniamo in ascolto di un evento click su quel button 'annulla'
buttonAnnulla.addEventListener( 'click',
function() {

    //svuotiamo elementi
    document.getElementById('nome-passeggero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('costo-biglietto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';

    //svuotiamo gli input
    document.getElementById('km').value = '';
    document.getElementById("fascia-eta").value = '';
    document.getElementById("nome-utente").value = '';

 
    var bigliettoStampato = document.getElementById('biglietto')
    bigliettoStampato.classList.remove('show');
    bigliettoStampato.classList.add('hidden');
});