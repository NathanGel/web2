const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen


    // maak Jans object
    let jan = { }; // maak een nieuw leeg object
    jan.voornaam = "Jan"; // voeg 'voornaam' property toe
    jan.familienaam = "Janssens"; // voeg 'familienaam' property toe

    // maak Jans adres object
    let locatieJan = { }; // maak een nieuw leeg object
    locatieJan.straat = "Koekoekstraat 70"; // voeg 'straat' property toe
    locatieJan.postcode = "9090"; // wijzig waarde van 'postcode' property
    locatieJan.gemeente = "Melle"; // voeg 'gemeente' property toe

    // voeg een 'adres' property toe aan Jans object, die naar Jans adres object wijst
    jan.adres = locatieJan; // voeg 'adres' property toe


    let mieke = { }; // maak een nieuw leeg object
    mieke.voornaam = "Mieke"; // voeg 'voornaam' property toe
    mieke.familienaam = "Mickelson"; // voeg 'familienaam' property toe

    let locatieMieke = { }; // maak een nieuw leeg object
    locatieMieke.straat = "Kerkstraat 12"; // voeg 'straat' property toe
    locatieMieke.postcode = "8000"; // wijzig waarde van 'postcode' property
    locatieMieke.gemeente = "Brugge"; // voeg 'gemeente' property toe

    // voeg een 'adres' property toe aan Miekes object, die naar Miekes adres object wijst
    mieke.adres = locatieMieke; // voeg 'adres' property toe


    // stop de beide objecten in een array
    let array = []; // maak een nieuw leeg array
    array.push(jan);
    array.push(mieke);
}

window.addEventListener("load", setup);
