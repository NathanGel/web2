const setup = () => {
    let ingredients = document.querySelectorAll("#lstIngredients>li");
    for(let i = 0; i< ingredients.length; i++){
        console.log(ingredients[i]);
        ingredients[i].addEventListener("click", removeElement);
    }
}

const removeElement = (event) => {
    let item = event.target;
    let lijst = item.parentNode;
    lijst.removeChild(item);

    event.preventDefault();
}

window.addEventListener("load", setup);