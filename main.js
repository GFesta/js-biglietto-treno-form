

var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( 'click',
function() {

    var inputNome = document.getElementById("nome-utente");
    var nomeUtente = inputNome.value;

    var inputEta = document.getElementById("fascia-eta");
    var eta = inputEta.value;

    var inputKm = document.getElementById("km");
    var percorrenza = parseInt(inputKm.value);

    var prezzoAlKilometro = 0.21;
    var prezzoBiglietto = prezzoAlKilometro * percorrenza;
    var offerta = "Tariffa Standard";


    if (eta == "minorenne") {
        ((prezzoBiglietto / 100) * 80);
        offerta = "Sconto Minorenne";
    } else if (eta == "over65") {
        ((prezzoBiglietto / 100) * 60);
        offerta = "Sconto Maggiorenne";
    } else {
        (prezzoBiglietto);
    } 
    
    var carrozza = Math.floor(Math.random() * 9) +1;
    var cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000;
    
    document.getElementById('nome-passeggero').innerHTML = nomeUtente;
    document.getElementById('offerta').innerHTML = offerta;
    document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto.toFixed(2) + " Euro"
    // toFixed(x) ARROTONDA A UN NUMERO DI DECIMALI SPECIFICATO
    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice-cp').innerHTML = cp;

    var bigliettoStampato = document.getElementById('biglietto');
    bigliettoStampato.classList.remove('hidden');
    bigliettoStampato.classList.add('show');
});

var buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener( 'click',
function() {
    document.getElementById('nome-passeggero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('costo-biglietto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';


    document.getElementById('km').value = '';
    document.getElementById("fascia-eta").value = '';
    document.getElementById("nome-utente").value = '';

    document.getElementById('km').value = '';
    document.getElementById("fascia-eta").value = '';
    document.getElementById("nome-utente").value = '';
    
    var bigliettoStampato = document.getElementById('biglietto')
    bigliettoStampato.classList.remove('show');
    bigliettoStampato.classList.add('hidden');
});