// In deze oplossing worden de DOM-tree nodes m.b.v. insertAdjacentHTML() toegevoegd
// en hangt de click event listener aan de individuele hyperlinks.
//
// voordeel : eenvoudige code om elementen toe te voegen aan de DOM-tree
// nadeel : we geraken moeilijk aan de nieuw toegevoegde <a> elementen om de event listener eraan te koppelen

const setup = () => {
    // registreer click event listener 'voegToe' bij #btnAdd
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

    let list = item.parentElement;
	// we hadden natuurlijk ook 
	// 'let list=document.querySelector("#lstIngredients");'
	// kunnen schrijven maar da's minder efficient
    list.removeChild(item);

    // zorg ervoor dat de navigatie (door de klik op de hyperlink) niet plaatsvindt
    event.preventDefault();
}

const voegToe = () => {
    // Lees de tekst uit het textveld en voeg nieuw <li> element toe
    let txtInput = document.querySelector("#txtInput");
    let ingredient = txtInput.value;
    let lstIngredients = document.querySelector("#lstIngredients");

    // Voeg een list item toe met daarin een 'verwijder' link d.m.v. insertAdjacentHTML
    lstIngredients.insertAdjacentHTML("beforeend", `<li>${ingredient} <a href="#">verwijder</a></li>`);
    // het nadeel van deze aanpak t.o.v. de oplossing met createElement is dat we nu niet geen
    // verwijzing hebben naar de toegevoegd hyperlink om de 'verwijder' click event listener te koppelen.

    // Nu moeten we de laatst toegevoegd hyperlink opvissen, dit kan op verschillende manieren.

    // ---

    // De simpelste is wellicht een slimme CSS selector gebruiken:
    // Selecteer alle hyperlinks in het laatste listitem dat een kind is van #lstIngredients, er vermits we
    // weten dat er maar 1 link is per listitem kunnen we .querySelector() gebruiken ipv querySelectorAll()
    let link=document.querySelector("#lstIngredients>li:last-of-type a");

    // Merk op dat dit niet werkt als slimme CSS-selector :
    //    document.querySelector("#lstIngredients a:last-of-type");
    // dit geeft immers de verzameling van alle hyperlinks die een laatste kind zijn IN HUN PARENT, m.a.w. dit zal de verzameling
    // van alle verwijder links opleveren en querySelector() geeft ons daarvan de eerste (i.e. die van 'boter')

    // ---

    // Een andere manier is : geef elke hyperlink een eigen CSS-class en zoek de verzameling van
    // alle elementen met die class. Neem vervolgens het laatste element in die verzameling, dat zal
    // de laatste hyperlink zijn. Deze manier is hier niet uitgewerkt.

    // ---

    // Nog een andere manier :
    // 1) zoek het laatste kind element op van #lstIngredients (via .children, niet .childNodes!), dat geeft ons het laatste <li> element
    // let item = lstIngredients.children[lstIngredients.children.length-1];
	// of nog makkelijker : 
	// let item = lstIngredients.lastElementChild;
    // 2) zoek dan daarin weerom het laatste kind element (via .children, niet .childNodes!), dat geeft ons de hyperlink.
    // let link = item.children[item.children.length-1];
	// of nog makkelijker : 
	// let link = item.lastElementChild;


    // koppel tot slot nog de 'verwijder' click event listener aan de hyperlinks
    link.addEventListener("click", verwijder);

}


window.addEventListener('load', setup);



















