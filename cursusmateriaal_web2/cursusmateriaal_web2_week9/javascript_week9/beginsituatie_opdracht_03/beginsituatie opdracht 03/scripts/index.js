const setup = () => {
    let btnVoegToe = document.querySelector("#btnAdd");
    btnVoegToe.addEventListener("click", voegToe);

    let ingredienten = document.querySelectorAll("#lstIngredients a");
    for(let i = 0; i<ingredienten.length; i++){
        ingredienten[i].addEventListener("click", verwijder);
    }
};

const voegToe = () => {
    let ingredient = document.querySelector("#txtInput").value;

    let lijst = document.querySelector("#lstIngredients");
    
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = "verwijder";
    link.addEventListener("click", verwijder);


    let nieuwIngredient = document.createElement("li");
    nieuwIngredient.textContent = ingredient + " ";
    nieuwIngredient.appendChild(link);

    lijst.appendChild(nieuwIngredient);
};

const verwijder = (event) => {
    let link = event.target;
    let item = link.parentNode;
    let lijst = item.parentNode;

    lijst.removeChild(item);
    
    event.preventDefault();
};

window.addEventListener("click", setup);