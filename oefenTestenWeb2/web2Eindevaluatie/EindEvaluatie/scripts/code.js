const setup = () => {
    let aantalPersonen = document.querySelector("#txtPersonCount");
    aantalPersonen.addEventListener("change", updateAantalPersonen);

    let aantalPerPersoon = document.querySelectorAll(".checklist span");
    for(let i = 0; i<aantalPerPersoon.length; i++){
        let dataPerPersoon = aantalPerPersoon[i].getAttribute("data-amount-per-person");
        aantalPerPersoon[i].textContent = Number.parseFloat(dataPerPersoon) * aantalPersonen.value;
    }

    let btnVoegToe = document.querySelector("#btnAdd");
    btnVoegToe.addEventListener("click", voegIngredientToe);

    let listItem = document.querySelectorAll(".checklist>li")
    for(let i = 0; i < listItem.length; i++){
        listItem[i].addEventListener("click", checkIngredient);
    }
};
const voegIngredientToe = () => {
    let aantal = document.querySelector("#txtAmountPerPerson").value;
    let beschrijving = document.querySelector("#txtDescription").value;
    
    let lijst = document.querySelector(".lstIngredients");

    let listItem = document.createElement("li");

    if(aantal!=0){
        let personCounter = document.querySelector("#txtPersonCount").value;
        let span = document.createElement("span");
        span.classList.add("amount");
        span.setAttribute("data-amount-per-person", aantal);
        span.textContent = aantal * personCounter;
        listItem.appendChild(span);
        span.insertAdjacentText("afterend", ` ${beschrijving}`);
    }else{
        listItem.textContent = beschrijving;
    }
    // Voeg een event listener toe
    listItem.addEventListener("click", checkIngredient);

    // Voeg de li toe aan de lijst
    lijst.appendChild(listItem);
};

const checkIngredient = (event) => {
    let listItem = event.currentTarget;

    if(listItem.classList.contains("checked")){
        listItem.classList.remove("checked")
    }else{
        listItem.classList.add("checked");
    }
};

const updateAantalPersonen = (event) => {
    let aantal = event.target;
    let lijstItems = document.querySelectorAll(".checklist span");
    for(let i = 0; i < lijstItems.length; i++){ 
        let dataAmount = lijstItems[i].getAttribute("data-amount-per-person");
        lijstItems[i].textContent = (Number.parseFloat(dataAmount) * aantal.value).toFixed(2);
    }
};

window.addEventListener("load", setup);