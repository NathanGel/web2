const setup = () => {
    // koppel de 'verwijder' click event listener aan elk list item in onze lijst
    let items=document.querySelectorAll("#lstIngredients>li");
    for (let i=0;i<items.length;i++) {
        items[i].addEventListener("click", verwijder);
    }
}

const verwijder = (event) => {
    // event.target zal het geklikte list item zijn
    let item = event.target;

    // de lijst is de parent van dit item
    let list = item.parentElement;
    // We hadden natuurlijk ook
    //    let list=document.querySelector("#lstIngredients");
    // kunnen schrijven maar da's minder efficient als we het item al hebben.
    // Plus, we willen ook eens .parentElement demonstreren :)

    // verwijder het <li> element uit het <ul> element
    list.removeChild(item);

    // zorg dat er geen navigatie plaatvindt door de klik op de hyperlink
    event.preventDefault();
}

window.addEventListener('load', setup);



















