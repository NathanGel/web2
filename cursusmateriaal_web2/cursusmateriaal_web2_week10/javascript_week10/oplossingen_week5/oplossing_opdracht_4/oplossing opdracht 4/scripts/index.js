// een globale variabele 'personen' die naar een leeg array wijst
// - dit array zal worden opgevuld in de vulMetDemoData() functie
const personen = [];


const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    // registreer een 'click' eventlistener bij de button
    const btnBewaar = document.querySelector("#btnBewaar");
    btnBewaar.addEventListener("click", bewaarPersoon);

    // vul het 'personen' array met demo data en toon deze op de console
    vulMetDemoData();
    toonAllePersonen();
};

const bewaarPersoon = () => {
    // Maak een leeg object
    const persoon = {};

    // Voeg een string property toe voor de waarde uit het corresponderende tekstveld
    const txtVoornaam =document.querySelector("#txtVoornaam");
    persoon.voornaam = txtVoornaam.value;

    // Voeg een string property toe voor de waarde uit het corresponderende tekstveld
    const txtFamilienaam = document.querySelector("#txtFamilienaam");
    persoon.familienaam = txtFamilienaam.value;

    // Voeg een string property toe voor de waarde uit het corresponderende tekstveld
    const txtEmail = document.querySelector("#txtEmail");
    persoon.email = txtEmail.value;

    // Voeg een Date property toe voor de waarde uit het corresponderende tekstveld
    const txtGeboortedatum = document.querySelector("#txtGeboortedatum");
    const geboortedatumAlsTekst=txtGeboortedatum.value;
    persoon.geboortedatum = new Date(geboortedatumAlsTekst);

    // Voeg een number property toe voor de waarde uit het corresponderende tekstveld
    const txtAantalKinderen = document.querySelector("#txtAantalKinderen");
    const aantalKinderenAlsTekst=txtAantalKinderen.value;
    persoon.aantalKinderen = Number.parseInt(aantalKinderenAlsTekst, 10);

    // toevoegen achteraan het personen array
    personen.push(persoon);

    // toon alle persoonsgegevens op de console
    toonAllePersonen();

    // maak alle invoervelden leeg
    txtVoornaam.value="";
    txtFamilienaam.value="";
    txtEmail.value="";
    txtGeboortedatum.value="";
    txtAantalKinderen.value="";
}

const toonPersoon = (persoon) => {
    // toon de gegevens van een persoon op de console
    const datumTekst = persoon.geboortedatum.toISOString().substr(0,10); // datum stukje uit ISO 8601 string halen
    console.log(`${persoon.voornaam},${persoon.familienaam},${datumTekst},${persoon.email},${persoon.aantalKinderen}`);
};

const vulMetDemoData = () => {
    // Voeg de persoonsgegevens toe aan het globale 'personen' array
    // (per persoon 1 object, dus 3 objecten in totaal).

    const jan = {
        voornaam : "Jan",
        familienaam : "Janssens",
        geboortedatum : new Date("2010-10-15"),
        email : "jan@example.com",
        aantalKinderen : 0
    };
    personen.push(jan);

    const mieke = {
        voornaam : "Mieke",
        familienaam : "Mickelson",
        geboortedatum : new Date("1980-01-01"),
        email : "mieke@example.com",
        aantalKinderen : 1
    };
    personen.push(mieke);

    // eens toevoegen zonder extra variabele te introduceren
    personen.push({
        voornaam : "Piet",
        familienaam : "Pieters",
        geboortedatum : new Date("1970-01-31"),
        email : "piet@example.com",
        aantalKinderen : 2
    });
}

const toonAllePersonen = () => {
    // overloop alle persoonsgegevens in het globale 'personen' array
    for (let i=0;i<personen.length;i++) {
        // toon deze persoon
        let persoon = personen[i];
        toonPersoon(persoon);
    }
}

window.addEventListener("load", setup);
