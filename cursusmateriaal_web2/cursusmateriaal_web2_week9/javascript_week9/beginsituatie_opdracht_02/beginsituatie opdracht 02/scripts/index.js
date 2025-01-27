const setup = () => {
    let ingredienten = document.querySelectorAll("#lstIngredients a");
    for(let i = 0; i<ingredienten.length; i++){
        ingredienten[i].addEventListener("click", verwijder);
    }
};

const verwijder = (event) => {
    let verwijderLink = event.target;
    let item = verwijderLink.parentNode
    let lijst = item.parentNode;

    lijst.removeChild(item);

    event.preventDefault();
}

window.addEventListener("click", setup);