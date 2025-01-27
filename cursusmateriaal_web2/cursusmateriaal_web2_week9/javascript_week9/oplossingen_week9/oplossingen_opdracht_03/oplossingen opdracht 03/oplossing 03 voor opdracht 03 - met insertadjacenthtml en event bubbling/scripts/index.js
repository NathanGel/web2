// In deze oplossing worden de DOM-tree nodes m.b.v. insertAdjacentHTML() toegevoegd
// en hangt de click event listener aan het <ul> element i.p.v. de individuele hyperlinks.
// We vertrouwen op event bubbling om zo de klik op een hyperlink te detecteren.
//
// voordeel : eenvoudige code om elementen toe te voegen aan de DOM-tree en we moeten slechts 1x een event listener koppelen
// nadeel : in de event listener is het nodig te onderscheiden of we op een hyperlink dan wel een andere element geklikt hebben
// hier testen we op wat voor soort element er geklikt werd waardoor onze code nogal sterk afhankelijk is van de HTML structuur.

const setup = () => {
    // registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

    // koppel de click event listener aan het <ul> element
    // Via event bubbling komen de kliks op de hyperlinks uiteindelijk
    // ook bij deze listener terecht zodat we erop kunnen reageren
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
    //
    // Hoe kunnen we deze drie gevallen herkennen en onderscheiden?
    //
    // Geval 1 herkennen is makkelijk, we weten immers dat event.currentTarget altijd
    // het <ul> element is, dus indien .target en .currentTarget gelijk zijn is het zeker geval 1
    //
    // Gevallen 2 en 3 onderscheiden is niet zo eenvoudig, we zouden kunnen :
    // a) de property .nodeName gebruiken, in geval 2 zal de waarde "LI" zijn en in geval 3 is dit "A"
    // b) kijken naar de grandparent van event.target, in geval 3 zal dit het <ul> element zijn en in geval 2 iets anders (het body element maar daar zullen we niet op checken voor het geval we ooit de html nog wijzigen)

    // we werken hier optie a) uit, dus we checken op .nodeName=="A" (let op : hoofdletters!!!)
    if (event.target.nodeName=="A") {
        // geval 3
        let link = event.target;
        let item = link.parentElement;
        let list = item.parentElement; // we hadden natuurlijk ook 'let list=document.querySelector("#lstIngredients");' kunnen schrijven maar da's minder efficient
        list.removeChild(item);
        event.preventDefault();
    } else {
        // gevallen 1 of 2, dus we doen niks
    }

    // Merk op dat we nu een redelijk starre oplossing hebben omdat we hierboven vastzitten aan een <a> element.
    // Als we ooit onze HTML aanpassen zodat er een ander soort element gebruikt wordt om op te klikken (bv.
    // een <img> element met delete icoon), dan moeten we bovenstaande check veranderen (bv. naar .nodeName=="IMG").
    //
    // In 'oplossing 04 voor opdracht 02' zullen we een CSS-class gebruiken, wat veel flexibeler is.
}

const voegToe = () => {
    // Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelector("#lstIngredients");

    // Voeg een list item toe met daarin een 'verwijder' link d.m.v. insertAdjacentHTML
    lstIngredients.insertAdjacentHTML("beforeend", `<li>${ingredient} <a href="#">verwijder</a></li>`);

    // vermits we in deze oplossing op event bubbling rekenen, moeten we geen
    // click event listener koppelen aan de hyperlink.
}


window.addEventListener('load', setup);



















