// In deze oplossing worden de DOM-tree nodes handmatig toegevoegd
// en hangt de click event listener aan de individuele hyperlinks.
//
// voordeel : we kunnen makkelijk aan de nieuw toegevoegd <a> elementen gerake
// nadeel : omslachtige code om elementen toe te voegen met createElement en appendChild
//
// Dit is samen met oplossing 04 'de betere oplossing'.

const setup = () => {
    // registeer click event listener 'voegToe' bij #btnAdd
    let btnAdd = document.querySelector("#btnAdd");
    btnAdd.addEventListener("click", voegToe);

    // koppel de 'verwijder' click event listener bij de hyperlinks
    let verwijderLinks=document.querySelectorAll("#lstIngredients a");
    for (let i=0;i<verwijderLinks.length;i++) {
        verwijderLinks[i].addEventListener("click", verwijder);
    }
}

const verwijder = (event) => {
    // verwijder de parent (i.e. het list item) van het geklikte element (i.e. de hyperlink)
    let link = event.target;
    let item = link.parentElement;

    let list = item.parentElement; // we hadden natuurlijk ook 'let list=document.querySelector("#lstIngredients");' kunnen schrijven maar da's minder efficient
    list.removeChild(item);

    // zorg ervoor dat de navigatie (door de klik op de hyperlink) niet plaatsvindt
    event.preventDefault();
}

const voegToe = () => {
    // Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelector("#lstIngredients");

    // voeg het nieuwe item toe door handmatig de HTML-elementen aan te maken
    // en aan de DOM-tree toe te voegen.
    // Op die manier kunnen we makkelijk aan de hyperlink geraken om er de
    // click event listener aan te koppelen

    // maak de link en koppel de event listener
    let link=document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent="verwijder";
    link.addEventListener("click", verwijder);

    // maak het list item en voeg de link toe
    let item=document.createElement("li");
    item.textContent=ingredient+" ";
    item.appendChild(link);

    // voeg het list item toe aan de unordered list
    lstIngredients.appendChild(item);
}


window.addEventListener('load', setup);



















