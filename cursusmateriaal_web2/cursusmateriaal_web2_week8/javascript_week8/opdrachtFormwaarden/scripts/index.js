const setup = () => {
    let btnToonResultaat = document.querySelector("#btnToonResultaat");
    btnToonResultaat.addEventListener("click", getInputs);
};

const getInputs = () => {
    let antwoorden = [];
    let isRoker = document.querySelector("#isRoker");
    if(isRoker.checked == true){
        antwoorden.push("Is een roker");
    }else{
        antwoorden.push("Is geen roker");
    }

    let moedertalen = document.querySelector("input[name='moedertaal']:checked");
    antwoorden.push(`moedertaal is ${moedertalen.value}`);

    let favBuurland = document.querySelectorAll("#favBuurland>option");
    for(let i = 0; i < favBuurland.length; i++){
        if(favBuurland[i].selected === true){
            antwoorden.push(`favoriete buurland is ${favBuurland[i].value}`);
        }
    }

    let bestelling = document.querySelectorAll("#bestelling>option");
    let producten = "";
    for(let i = 0; i < bestelling.length; i++){
        if(bestelling[i].selected === true){
            producten += bestelling[i].textContent + " ";
        }
    }
    antwoorden.push(`bestelling bestaat uit ${producten}`);
    printAntwoorden(antwoorden);
};

const printAntwoorden = (antwoorden) => {
    for(let antwoord of antwoorden){
        console.log(antwoord);
    }
};

window.addEventListener("load", setup);