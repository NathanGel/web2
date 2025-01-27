// In deze oplossing worden de DOM-tree nodes m.b.v. insertAdjacentHTML() toegevoegd
// en hangt de click event listener aan het <ul> element i.p.v. de individuele hyperlinks.
// We vertrouwen op event bubbling om zo de klik op een hyperlink te detecteren.
//
// voordeel : eenvoudige code om elementen toe te voegen aan de DOM-tree en we moeten slechts 1x een event listener koppelen
// nadeel : in de event listener is het nodig te onderscheiden of we op een hyperlink dan wel een andere element geklikt hebben
// hier testen we op de aanwezigheid van een specifieke class waardoor onze code minder afhankelijk is van de HTML structuur.
//
// Dit is samen met oplossing 01 'de betere oplossing'.

const setup = () => {
    // registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

    // Registreer de click event listener voor de verwijder links op het <ul> element,
    // we zullen in de event listener wel wat extra speurwerk moeten doen
    let lstIngredients=document.querySelector("#lstIngredients");
    lstIngredients.addEventListener("click", verwijder);
}

const verwijder = (event) => {
    // Vermits we de click event listener gekoppeld hebben aan het <ul> element,
    // zijn er drie mogelijke soorten elementen voor event.target :
    // 1) het <ul> element zelf
    // 2) een van de <li> elementen
    // 3) een van de <a> elementen
    //
    // We willen enkel een element verwijderen indien het geval 3 is! In gevallen 1 en 2 doen we niks.

    // GEWIJZIGD TOV 'oplossing 03 voor opdracht 02'
    // In de oplossing hebben alle verwijder links een CSS-class "removeLink" dus we kunnen
    // geval 3 heel eenvoudig herkennens :
    if (event.target.classList.contains("removeLink")) {
        let link = event.target;
        let item = link.parentElement;
        let list = item.parentElement; // we hadden natuurlijk ook 'let list=document.querySelector("#lstIngredients");' kunnen schrijven maar da's minder efficient
        list.removeChild(item);
        event.preventDefault();
    }

    // Door te checken op CSS-class removeLink i.p.v. .nodeName=="a", hebben we een
    // flexibelere oplossing. We kunnen eender welk element gebruiken om op te klikken
    // (bv. een <img> met delete icoon) zolang het maar de juiste CSS-class draagt!
}

const voegToe = () => {
    // Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelector("#lstIngredients");

    // Voeg een list item toe met daarin een 'verwijder' link d.m.v. insertAdjacentHTML
    lstIngredients.insertAdjacentHTML("beforeend", `<li>${ingredient} <a class="removeLink" href="#">verwijder</a></li>`); // GEWIJZIGD TOV 'oplossing 03 voor opdracht 02' : class toegevoegd

    // vermits we in deze oplossing op event bubbling rekenen, moeten we geen
    // click event listener koppelen aan de hyperlink.
}


window.addEventListener('load', setup);



















