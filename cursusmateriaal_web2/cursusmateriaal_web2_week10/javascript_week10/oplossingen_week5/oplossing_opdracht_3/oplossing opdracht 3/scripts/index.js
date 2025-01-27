// Het array met de voorgedefinieerde persoonsgegevens, in object literal notatie.
// - het bevat 3 elementen, elk element is (een verwijzing naar) een object.
// - elk object heeft 'voornaam', 'familienaam' en 'leeftijd' properties.
let personen = [{
    voornaam : "Jan",
    familienaam : "Janssens",
    leeftijd : 29
},{
    voornaam : "Mieke",
    familienaam : "Mickelson",
    leeftijd : 31
},{
    voornaam : "Donald",
    familienaam : "Duck",
    leeftijd : 86
},{
    voornaam : "Piet",
    familienaam : "Piraat",
    leeftijd : 54
}];


const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen

    // voeg voor elke persoon een <option> toe
    let select = document.querySelector(".person-list");
    for (let i=0;i<personen.length;i++) {
        let persoon = personen[i];
        // bouw de HTML tekst voor de <option>
        let optionText = `<option data-index="${i}">${persoon.voornaam} (${persoon.leeftijd})</option>`;
        // voeg de option achteraan toe (i.e. onderaan in de lijst)
        select.insertAdjacentHTML("beforeend", optionText);
    }

    // registreer een 'change' event listener functie
    // die zal worden opgeroepen telkens de selectie wijzigt
    select.addEventListener("change", selecteerPersoon);
};

const selecteerPersoon = () => {
    // de selectie is gewijzigd

    // bepaal welke <option> geselecteerd is
    let select = document.querySelector(".person-list");
    let selectedIndex = select.selectedIndex;
    let option = select.options[selectedIndex];

    // wat is de waarde van het data-index attribuut van die <option>?
    let dataIndexText = option.getAttribute("data-index");
    let dataIndex = Number.parseInt(dataIndexText, 10);

    // bepaal het corresponderende persoon object in het globale 'personen' array
    let persoon = personen[dataIndex];

    // stop de voornaam in de DOM-tree
    let liVoornaam = document.querySelector(".firstname")
    liVoornaam.textContent = persoon.voornaam;

    // stop de familienaam in de DOM-tree
    let liFamilienaam = document.querySelector(".lastname")
    liFamilienaam.textContent = persoon.familienaam;

    // stop de leeftijd in de DOM-tree (eens zonder een variabele te gebruiken)
    document.querySelector(".age").textContent=persoon.leeftijd;
};


window.addEventListener("load", setup);
