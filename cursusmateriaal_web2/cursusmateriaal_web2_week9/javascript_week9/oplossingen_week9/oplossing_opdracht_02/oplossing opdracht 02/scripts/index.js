const setup = () => {
    // koppel de 'verwijder' click event listener aan elke hyperlink in onze lijst
    let verwijderLinks=document.querySelectorAll("#lstIngredients a");
    for (let i=0;i<verwijderLinks.length;i++) {
        verwijderLinks[i].addEventListener("click", verwijder);
    }
}

const verwijder = (event) => {
    // event.target zal de geklikte hyperlink zijn
    let link = event.target;

    // Nu moeten we het bovenliggende <li> element uit #lstIngredients verwijderen
    // (de hyperlink verwijnt dan trouwens ook omdat die aan het verwijderde <li> element hangt).
    //
    // Om te verwijderen gebruiken we parent.removeChild(child), dus we hebben verwijzingen nodig
    // 1) naar het <li> element, d.i. de parent van de hyperlink
    // 2) naar het <ul> element, d.i. de parent van het list item
    let item = link.parentElement;
    let list = item.parentElement;  // we hadden natuurlijk ook 'let list=document.querySelector("#lstIngredients");' kunnen schrijven maar da's minder efficient

    // verwijder het <li> element uit het <ul> element
    list.removeChild(item);

    // zorg dat er geen navigatie plaatvindt door de klik op de hyperlink
    event.preventDefault();
}

window.addEventListener('load', setup);



















