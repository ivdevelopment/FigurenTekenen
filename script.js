"use strict";

// GLOBALE VARS
const symboolLijn = document.getElementById('symboolLijn');
const lengteLijn = document.getElementById('lengteLijn');
const insprongLijn = document.getElementById('insprongLijn');
const lijnKnop = document.getElementById('lijnKnop');
const symboolDriehoek = document.getElementById('symboolDriehoek');
const breedteDriehoek = document.getElementById('breedteDriehoek');
const insprongDriehoek = document.getElementById('insprongDriehoek');
const driehoekKnop = document.getElementById('driehoekKnop');
const symboolVierkant = document.getElementById('symboolVierkant');
const lengteVierkant = document.getElementById('lengteVierkant');
const breedteVierkant = document.getElementById('breedteVierkant');
const insprongVierkant = document.getElementById('insprongVierkant');
const vierkantKnop = document.getElementById('vierkantKnop');
const tekeningParent = document.getElementById('tekening');
const tekeningChild = document.createElement('p');
const nieuweRegel = '\n'; // Hiermee bekom je een nieuwe regel ('white-space: pre;' in CSS)
const pElementen = document.querySelector('p');




// EVENTS
lijnKnop.addEventListener('click', function () {
    maakLijn(symboolLijn.value, lengteLijn.value)
})

driehoekKnop.addEventListener('click', function () {
    maakDriehoek(symboolDriehoek.value, breedteDriehoek.value)
})

vierkantKnop.addEventListener('click', function () {
    maakVierkant(symboolVierkant.value, lengteVierkant.value, breedteVierkant.value)
})

tekeningChild.addEventListener('click', verwijderAllesNaKlikkenOpText)        

// FUNCTIES

// Functie voor een lijn te tekenen
function maakLijn(symbool, lengte) {
    telDeInsprong(insprongLijn.value);
    for (let teller = 0; teller < lengte; teller++) {
        tekeningParent.appendChild(tekeningChild);
        tekeningChild.appendChild(document.createTextNode(symbool));
    }
    tekeningChild.appendChild(document.createTextNode(nieuweRegel)); // text node wordt op een nieuwe regel geplaatst
}

// Functie voor een driehoek te tekenen
function maakDriehoek(symbool, breedte) {
    for (let hoogteTeller = 0; hoogteTeller < breedte; hoogteTeller++) {
        telDeInsprong(insprongDriehoek.value);
        for (let breedteTeller = 0; breedteTeller < hoogteTeller + 1; breedteTeller++) {
            tekeningParent.appendChild(tekeningChild);
            tekeningChild.appendChild(document.createTextNode(symbool));
        }
        tekeningChild.appendChild(document.createTextNode(nieuweRegel)); // text node wordt op een nieuwe regel geplaatst voor het maken van de driehoek
    }
}

// Functie voor een vierkant te tekenen
function maakVierkant(symbool, lengte, breedte) {
    for (let breedteTeller = 0; breedteTeller < breedte; breedteTeller++) {
        telDeInsprong(insprongVierkant.value);
        for (let lengteTeller = 0; lengteTeller < lengte; lengteTeller++) {
            tekeningParent.appendChild(tekeningChild);
            tekeningChild.appendChild(document.createTextNode(symbool));
        }
        tekeningChild.appendChild(document.createTextNode(nieuweRegel)); // text node wordt op een nieuwe regel geplaatst voor het maken van de vierkant
    }
}

// Functie voor de insprong te tellen en te plaatsen
function telDeInsprong(insprong) {
    for (let insprongTeller = 0; insprongTeller < insprong; insprongTeller++) {
        tekeningChild.appendChild(document.createTextNode(' '));
    }
}

// Functie voor het verwijderen van alle text nadat je er op klikt
function verwijderAllesNaKlikkenOpText(){
    tekeningParent.removeChild(tekeningChild);
            tekeningChild.innerText = '';
}