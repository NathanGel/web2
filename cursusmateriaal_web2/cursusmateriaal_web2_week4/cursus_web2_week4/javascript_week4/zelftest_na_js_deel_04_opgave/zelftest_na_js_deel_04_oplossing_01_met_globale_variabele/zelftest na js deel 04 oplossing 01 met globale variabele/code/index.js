// De globale variabele om de laatst geselecteerde kleur bij te houden
// We intialiseren dit op "white" omdat de gebruiker al kan klikken op een testzone
// zonder dat er al een kleur geselecteerd was (voor de eenvoud check we dit niet)
let globalGeselecteerdeKleur = "white";

const setup = () => {
    // Koppel event listener voor button
    let btnVoegToe=document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", voegKleurToe);

    // Koppel event listener voor elke testzone
    let testZones = document.getElementsByClassName("testZone");
    for (let i=0;i<testZones.length;i++) {
        let testZone = testZones[i];
        testZone.addEventListener("click", kleurTestZone);
    }
}


const voegKleurToe=() => {
    // Zoek op welke kleur de gebruiker invoerde
    let txtKleur = document.getElementById("txtKleur");
    let kleur = txtKleur.value;

    // Maak tekstveld leeg
    txtKleur.value="";

    // Voeg een kleurzone toe (let op het gebruik van " en ')
    let secKleurZones = document.getElementById("secKleurZones");
    secKleurZones.innerHTML+="<span class='kleurZone' style='background-color:"+kleur+";'>"+kleur+"</span>";

    // Doordat we innerHTML += gebruiken, voegen we niet enkel een nieuwe <span> toe, maar vervangen we ook
    // elk bestaand element in #secKleurZonesdoor een (bijna) perfecte kopie! Deze kopie zal echter geen
    // gekoppelde event listener hebben, dus moeten we ze allemaal opnieuw registreren.
    //
    // Deze grote tekortkoming van innerHTML wordt in een later deel uitvoerig behandeld en we zullen dan
    // ook een betere aanpak zien (bv. insertAdjacentHTML) waardoor de bestaande elementen (en hun gekoppelde
    // event listeners!) behouden blijven.

    // Koppel event listener voor elke kleurzone
    let kleurZones = document.getElementsByClassName("kleurZone");
    for (let i=0;i<kleurZones.length;i++) {
        let kleurZone = kleurZones[i];
        kleurZone.addEventListener("click", selecteerKleur);
    }

    // Pas instructies aan, dwz verberg 'begin' en toon 'vervolg'
    let secInstructiesBegin = document.getElementsByClassName("secInstructiesBegin")[0];
    secInstructiesBegin.classList.add("hidden");
    let secInstructiesVervolg = document.getElementsByClassName("secInstructiesVervolg")[0];
    secInstructiesVervolg.classList.remove("hidden");
    // Merk op dat we dit steeds opnieuw doen telkens een kleurzone wordt toegevoegd. Dit kan geen
    // kwaad (2x verbergen blijft immers verborgen) maar is niet zo netjes. We zouden kunnen checken
    // of het nodig is, maar deden het hier niet voor de eenvoud.
};

const selecteerKleur = (event) => {
    let geklikteKleurZone = event.target;
    let kleur = geklikteKleurZone.style.backgroundColor;
    // alternatief : let kleur = geklikteKleurZone.textContent;

    // onthoud de geselecteerde kleur in de globale variabele
    globalGeselecteerdeKleur = kleur;
}

const kleurTestZone = (event) => {
    // op welke test zone werd geklikt?
    let geklikteTestZone = event.target;

    // pas de kleur van die test zone
    geklikteTestZone.style.backgroundColor = globalGeselecteerdeKleur;
}

window.addEventListener("load", setup);
